import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main/main-layout.component';
import { HomeComponent } from './pages/home/home';
import { ContactComponent } from './pages/contact/contact';
import { AboutComponent } from './pages/about/about';
import { SolutionsComponent } from './pages/solutions/solutions';
import { SupermindsComponent } from './pages/superminds/superminds';
import { TechnologyComponent } from './pages/technology/technology';


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
            {
                path: 'Contact',
                title: 'MMC Innovations | Contact',
                component: ContactComponent,
            },
            {
                path: 'About',
                title: 'MMC Innovations | About',
                component: AboutComponent,
            },
            {
                path: 'Solutions',
                title: 'MMC Innovations | Solutions',
                component: SolutionsComponent,
            },
            {
                path: 'SuperMinds',
                title: 'MMC Innovations | SuperMinds',
                component: SupermindsComponent,
            },
            {
                path: 'Technology',
                title: 'MMC Innovations | Technology',
                component: TechnologyComponent,
            },
        ],
    },
];