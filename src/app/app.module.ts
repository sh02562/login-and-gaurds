import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CoreModule } from './core/core.module';
import { } from '@angular/compiler';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { LoginComponent } from './core/login/login.component';
// import { SignupComponent } from './core/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule { }
