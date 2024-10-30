import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth/auth.guard';
import { BaseComponent } from './base/base/base.component';


export const routes: Routes = [
    {
        path: '',
        component: BaseComponent,
        children: [
            { path: 'dashboard', component: HomeComponent, canActivate: [authGuard], data: { title: 'Dashboard' } }
        ]
    },
    { path: 'login', component: LoginComponent, data: { title: 'Login' } },
    { path: '**', redirectTo: 'login' }
];
