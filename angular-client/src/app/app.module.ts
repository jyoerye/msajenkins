import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {LoginModule} from "./login.module";
import {DbcrudService} from "./dbcrud.service";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule
  ],
  providers: [DbcrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
