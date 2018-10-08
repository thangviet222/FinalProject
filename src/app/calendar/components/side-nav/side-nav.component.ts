import { Component, OnInit, NgZone,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Router } from '@angular/router';
const SMALL_WIDTH_BREAKPOINT = 850;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)

  constructor(zone: NgZone,private router:Router) {
    this.mediaMatcher.addListener(mql => {
      zone.run(() => this.mediaMatcher = mql);
    })
  }
  @ViewChild(MatSidenav) sidenav: MatSidenav;

  ngOnInit() {
    this.router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    });
  }
  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
}
