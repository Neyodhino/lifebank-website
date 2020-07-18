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
      anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8', 'section9'],
      verticalCentered: false,
      horizontalCentered: false,
      fadingEffect: true,
      easingcss3: 'cubic-bezier(0.45, 0, 0.55, 1)',
      scrollingSpeed: 500,
      navigation: true,
      scrollOverflow: true
    };
   }

  ngOnInit() {
    // window.location.reload();
  }
}
