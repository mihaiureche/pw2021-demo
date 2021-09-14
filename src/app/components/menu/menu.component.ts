import { Component, OnInit } from '@angular/core';
import { MenuItem, MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  template: `<p-megaMenu [model]="items"></p-megaMenu>`
})
export class MenuComponent implements OnInit {

  items: MegaMenuItem[];

  constructor() {
    this.items = [
        {
            label: 'Home',
            routerLink: '/'
        },
        {
            label: 'Movies',
            icon: 'fab fa-youtube',
            routerLink: 'movies'
        },
    ];
  }

  ngOnInit() {
  }
}