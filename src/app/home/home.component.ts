import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  config: any;
  fullpage_api: any;

  constructor(
    @Inject(DOCUMENT) document
  ) {
      this.config = {

        licenseKey: 'YOUR LICENSE KEY HERE',
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        menu: '#menu',
        verticalCentered: false,

        afterResize: () => {
          console.log('After resize');
        },
        afterLoad: (origin, destination, direction) => {
          console.log(origin.index);
        }
      };
  }
  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

  ngOnInit(): void { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e): void {
     if (window.pageYOffset > 90) {
       const element = document.getElementById('navbar');
       element.classList.add('sticky');
     } else {
      const element = document.getElementById('navbar');
      element.classList.remove('sticky');
     }
  }

}

