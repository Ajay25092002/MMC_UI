import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main/main-layout.component';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,

        children: [
            {
                path: '',
                redirectTo: 'Home',
                pathMatch: 'full',
            },
            {
                path: 'Home',
                title: 'MMC Innovations | Home',
                component: HomeComponent,
            },
        ],
    },
];