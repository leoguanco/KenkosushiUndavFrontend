import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/components/login/login.component';
import { HomeComponent } from './modules/components/home/home.component';
import { LoginService } from './services/login.service';
import { ProductComponent } from './modules/components/product/product.component';
import { UserComponent } from './modules/components/user/user.component';
import { PromotionComponent } from './modules/components/promotion/promotion.component';
import { ConfigurationComponent } from './modules/components/configuration/configuration.component';
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { ContactComponent } from './modules/components/contact/contact.component';
import { LunchbuffetComponent } from './modules/components/lunchbuffet/lunchbuffet.component';
import { AbmproductsComponent } from './modules/components/abmproducts/abmproducts.component';
import { AbmuserComponent } from './modules/components/abmuser/abmuser.component';

import { ConfigurationService } from './services/configuration.service';
import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';

import {SlickModule} from 'ngx-slick';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    UserComponent,
    PromotionComponent,
    ConfigurationComponent,
    NavbarComponent,
    ContactComponent,
    LunchbuffetComponent,
    AbmproductsComponent,
    AbmuserComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    routing,
    SlickModule.forRoot()
  ],
  providers: [appRoutingProviders, LoginService, ProductService, ConfigurationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
