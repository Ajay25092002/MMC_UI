import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main/main-layout.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "Home",
        pathMatch: "full"
    },
    {
        path: "Home",
        component: MainLayoutComponent,
    }
];