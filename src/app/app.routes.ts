import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        title: 'Francisco Panuccio - Inicio'
    },
    {
        path: 'projects',
        loadComponent: () => import('./pages/projects/projects.component').then((m) => m.ProjectsComponent),
        title: 'Francisco Panuccio - Proyectos'
    },
    {
        path: 'project/:id',
        loadComponent: () => import('./pages/project/project.component').then((m) => m.ProjectComponent),
        title: 'Francisco Panuccio - Proyecto'
    },
    {
        path: 'project',
        loadComponent: () => import('./pages/project/project.component').then((m) => m.ProjectComponent),
        title: 'Francisco Panuccio - Proyecto'
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
        title: 'Francisco Panuccio - Sobre Mí'
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
        title: 'Francisco Panuccio - Contacto'
    },
    {
        path: 'error',
        loadComponent: () => import('./pages/error/error.component').then((m) => m.ErrorComponent),
        title: 'Francisco Panuccio - Error 404'
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        loadComponent: () => import('./pages/error/error.component').then((m) => m.ErrorComponent),
        title: 'Francisco Panuccio - Error 404'
    }
];
