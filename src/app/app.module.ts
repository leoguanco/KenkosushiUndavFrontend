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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders, LoginService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
