import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'ap-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  @ViewChild('sidenav') sideNav: MatSidenav;
  toggleMenu() {
    console.log(this);
    this.sideNav.toggle();
  }

}
