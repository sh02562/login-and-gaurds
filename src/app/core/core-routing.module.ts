import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [    
  {
  path: '', component: CoreComponent,
    children: [
      // { path: '', loadChildren:() => import('src/app/core/signup/signup.module').then(module => module.SignupModule) , outlet: 'signup' },

      //   { path: 'login', loadChildren:() => import('src/app/core/login/login.module').then(module => module.LoginModule) , outlet: 'login' },
        { path: 'signup', loadChildren:() => import('../core/signup/signup.module').then(module => module.SignupModule)  },

        { path: 'login', loadChildren:() => import('../core/login/login.module').then(module => module.LoginModule)  },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
