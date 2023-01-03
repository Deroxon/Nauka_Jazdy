import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Auth/AdminPanel/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Auth/forgot-password/forgot-password.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { DashboardGuardService } from './services/Guards/dashboard-guard.service';
import { UpdateComponent } from './updates/update/update.component';
import { UpdatesComponent } from './updates/updates.component';

const appRoute: Routes = [
    {path: '', redirectTo: 'Strona Główna', pathMatch: 'full'},
    {path: 'Strona Główna', component: HomeComponent},
    {path: 'Galeria', component: HomeComponent},
    {path: 'Aktualności', component: UpdatesComponent},
    {path: 'Aktualności/Artykuł/:id', component: UpdateComponent},
    {path: 'Register', component: RegisterComponent},
    {path: 'Login', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'Login/ForgotPassword', component: ForgotPasswordComponent},
    {path: 'Register', component: RegisterComponent},
    {path: 'AdminPanel/Dashboard', component: DashboardComponent, canActivate:  [DashboardGuardService]},
    {path: '**', component: ErrorComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoute)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}
