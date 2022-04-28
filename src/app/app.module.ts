import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { ClientsPageComponent } from './clients-page/clients-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ObserveVisibilityDirective } from './observe-visibility.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalContactUsComponent } from './modal-contact-us/modal-contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesPageComponent } from './services-page/services-page.component';
import { HttpClientModule  } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsPageComponent,
    ClientsPageComponent,
    HomePageComponent,
    ObserveVisibilityDirective,
    ModalContactUsComponent,
    ServicesPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule 
  ],
  entryComponents:[MatDialogModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }