import { Component, OnInit, Inject, Renderer2, ViewChild, ElementRef} from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {
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

  ngOnInit() {
    // window.location.reload();
  }
}
