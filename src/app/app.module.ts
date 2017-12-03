import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/components/login/login.component';
import { HomeComponent } from './modules/components/home/home.component';
import { LoginService } from './services/login.service';

import { routing, appRoutingProviders } from './app.routing';
import { ProductComponent } from './modules/components/product/product.component';
import { ProductService } from './services/product.service';
import { UserComponent } from './modules/components/user/user.component';
import { PromotionComponent } from './modules/components/promotion/promotion.component';
import { ConfigurationComponent } from './modules/components/configuration/configuration.component';
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { ContactComponent } from './modules/components/contact/contact.component';
import {SlickModule} from 'ngx-slick';
import { LunchbuffetComponent } from './modules/components/lunchbuffet/lunchbuffet.component';
import {ConfigurationService} from './services/configuration.service';

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
    LunchbuffetComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    routing,
    SlickModule.forRoot()
  ],
  providers: [appRoutingProviders, LoginService, ProductService, ConfigurationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
