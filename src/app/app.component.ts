import { Component, DestroyRef } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
  RouterOutlet
} from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ImagePreloadService } from './services/image-preload.service';
import { LoadingComponent } from './pages/loading/loading.component';
import { LayoutStateService } from './services/layout-state.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  initialAssetsLoading: boolean = true;
  routeLoading: boolean = false;

  private activeLazyLoads: number = 0;
  private navigationLoadingTimeout?: ReturnType<typeof setTimeout>;
  private currentUrl: string = '';

  constructor(
    private readonly imagePreloadService: ImagePreloadService,
    private readonly router: Router,
    private readonly destroyRef: DestroyRef,
    public readonly layoutStateService: LayoutStateService
  ) {
    this.currentUrl = this.router.url;
    this.preloadInitialAssets();
    this.listenRouteLoading();
  }

  get showLoading(): boolean {
    return this.initialAssetsLoading || this.routeLoading;
  }

  get alignPageContentStart(): boolean {
    return this.isAboutRoute && this.layoutStateService.aboutSkillsExpanded();
  }

  get isAboutRoute(): boolean {
    return this.currentUrl.startsWith('/about');
  }

  get usesPersistentCenterLayout(): boolean {
    return this.isErrorRoute || this.showLoading;
  }

  private get isErrorRoute(): boolean {
    const activeRoutePath = this.router.routerState.snapshot.root.firstChild?.routeConfig?.path;

    return activeRoutePath === 'error' || activeRoutePath === '**';
  }

  private preloadInitialAssets(): void {
    this.imagePreloadService
      .preloadPriority()
      .finally(() => {
        this.initialAssetsLoading = false;
        this.imagePreloadService.preloadAll();
      });
  }

  private listenRouteLoading(): void {
    this.router.events
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.scheduleNavigationLoading();
          return;
        }

        if (event instanceof RouteConfigLoadStart) {
          this.activeLazyLoads++;
          this.showRouteLoading();
          return;
        }

        if (event instanceof RouteConfigLoadEnd) {
          this.activeLazyLoads = Math.max(0, this.activeLazyLoads - 1);
          return;
        }

        if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          if (event instanceof NavigationEnd) {
            this.currentUrl = event.urlAfterRedirects;
          }

          this.clearNavigationLoadingTimeout();

          if (this.activeLazyLoads === 0) {
            this.routeLoading = false;
          }
        }
      });
  }

  private scheduleNavigationLoading(): void {
    this.clearNavigationLoadingTimeout();

    this.navigationLoadingTimeout = setTimeout(() => {
      this.showRouteLoading();
    }, 120);
  }

  private showRouteLoading(): void {
    this.clearNavigationLoadingTimeout();
    this.routeLoading = true;
  }

  private clearNavigationLoadingTimeout(): void {
    if (!this.navigationLoadingTimeout) {
      return;
    }

    clearTimeout(this.navigationLoadingTimeout);
    this.navigationLoadingTimeout = undefined;
  }
}
