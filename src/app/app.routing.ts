import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { LoginComponent } from './modules/components/login/login.component';
import { HomeComponent } from './modules/components/home/home.component';
import {ConfigurationComponent} from './modules/components/configuration/configuration.component';
import {ProductComponent} from './modules/components/product/product.component';
import {UserComponent} from './modules/components/user/user.component';
import {ContactComponent} from './modules/components/contact/contact.component';
import {LunchbuffetComponent} from './modules/components/lunchbuffet/lunchbuffet.component';
import {AbmproductsComponent} from './modules/components/abmproducts/abmproducts.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'configuration', component: ConfigurationComponent},
  { path: 'products', component: ProductComponent},
  { path: 'users', component: UserComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'lunchbuffet', component: LunchbuffetComponent},
  { path: 'ambproducts', component: AbmproductsComponent},
  { path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
