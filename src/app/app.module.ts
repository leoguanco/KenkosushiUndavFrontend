import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './modules/components/login/login.component';
import { LoginService } from './services/login.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
