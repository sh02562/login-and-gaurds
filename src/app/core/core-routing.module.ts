import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [    
  {
  path: '', component: CoreComponent,
    children: [
      
        { path: 'signup', loadChildren:() => import('../core/signup/signup.module').then(module => module.SignupModule)  },
        { path: 'login', loadChildren:() => import('../core/login/login.module').then(module => module.LoginModule)  },
        { path: '', redirectTo: '/signup', pathMatch: 'full' },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
