import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { UpdatesComponent } from './updates/updates.component';

const appRoute: Routes = [
    {path: '', redirectTo: 'Strona Główna', pathMatch: 'full'},
    {path: 'Strona Główna', component: HomeComponent},
    {path: 'Galeria', component: HomeComponent},
    {path: 'Aktualności', component: UpdatesComponent},
    {path: '**', component: ErrorComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoute)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}