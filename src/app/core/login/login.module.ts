import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/services/auth.service';
import { CommonCustomModule } from '@CommonCustomModule';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    CommonCustomModule,  
    LoginRoutingModule
  ],
  providers:[AuthService]
  
})
export class LoginModule { }
