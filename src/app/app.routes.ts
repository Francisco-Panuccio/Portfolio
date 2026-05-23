import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent,
        title: 'Francisco Panuccio - Inicio'
    },
    {
        path: 'projects', component: ProjectsComponent,
        title: 'Francisco Panuccio - Proyectos'
    },
    {
        path: 'about', component: AboutComponent,
        title: 'Francisco Panuccio - Sobre Mi'
    },
    {
        path: 'contact', component: ContactComponent,
        title: 'Francisco Panuccio - Contacto'
    },
    {
        path: 'error', component: ErrorComponent,
        title: 'Francisco Panuccio - Error'
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: ErrorComponent,
        title: 'Francisco Panuccio - Error'
    }
];
