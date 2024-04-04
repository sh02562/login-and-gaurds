import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CoreComponent } from './core.component';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [

    CoreComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreRoutingModule
  ],
  providers:[AuthService]
})
export class CoreModule { }
