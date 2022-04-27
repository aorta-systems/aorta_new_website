import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ClientsPageComponent } from './clients-page/clients-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'clients', component: ClientsPageComponent },
  { path: 'contacts', component: ContactsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomePageComponent, ServicesPageComponent, ClientsPageComponent, ContactsPageComponent]