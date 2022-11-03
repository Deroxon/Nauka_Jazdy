import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';

import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  {MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {AngularFireModule} from '@angular/fire/compat'

import { OfferComponent } from './offer/offer.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { GmapComponent } from './gmap/gmap.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { UpdatesComponent } from './updates/updates.component';
import { UpdateComponent } from './updates/update/update.component';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { ForgotPasswordComponent } from './Auth/forgot-password/forgot-password.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    OfferComponent,
    PricingComponent,
    ContactComponent,
    GmapComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent,
    UpdatesComponent,
    UpdateComponent,

  ],
  imports: [

   //Modules
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  HttpClientModule,
  MatSnackBarModule,
  AppRoutingModule,
  AngularFireModule.initializeApp(environment.firebase),


  //Angular Material
  MatGridListModule,
  MatButtonModule,
  MatTableModule,
  MatIconModule,
  MatFormFieldModule,
  MatListModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
