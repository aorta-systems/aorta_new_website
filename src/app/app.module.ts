import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { ClientsPageComponent } from './clients-page/clients-page.component';
import { SolutionsPageComponent } from './solutions-page/solutions-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ObserveVisibilityDirective } from './observe-visibility.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsPageComponent,
    ClientsPageComponent,
    SolutionsPageComponent,
    HomePageComponent,
    ObserveVisibilityDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
