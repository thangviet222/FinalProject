import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content-app',
  template: `
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class MainContentAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
