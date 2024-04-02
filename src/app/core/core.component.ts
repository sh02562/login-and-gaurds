import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent {
  isShow = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate([`core/signup`]);
  }

  

  toggle(page:string){
this.router.navigate([`core/${page}`]);
  }
}
