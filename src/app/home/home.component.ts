import { Component, OnInit, HostListener, Inject, Renderer2, ViewChild, ElementRef} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('fullpageRef', {static: false}) fp_directive: ElementRef;
  config;
  fullpage_api;

  constructor(
    @Inject(DOCUMENT) document,
    private renderer: Renderer2
  ) {
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      verticalCentered: false,
      horizontalCentered: false,
      fadingEffect: true,
      easingcss3: 'cubic-bezier(0.45, 0, 0.55, 1)',
      scrollingSpeed: 550,
      navigation: false,
      scrollOverflow: true
    };
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

