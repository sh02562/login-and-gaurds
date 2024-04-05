import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 email!:string;
 password!:string;
 isLoading = false;
 constructor(private _authService:AuthService){}

ngOnInit(){

}
login(){
  this.isLoading = true;
console.log("passwor",this.password);
let data={
  email:this.email,
  password:this.password
}
this._authService.loginUser(data).subscribe((res)=>{
console.log('test',res);
this.isLoading = false;

})
}
}
