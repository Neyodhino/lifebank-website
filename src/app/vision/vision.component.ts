import { Component, OnInit, HostListener, Inject, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss']
})
export class VisionComponent implements OnInit {
  @ViewChild('fullpageRef', {static: false}) fp_directive: ElementRef;
  config;
  fullpage_api;



  constructor(private renderer: Renderer2) {
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      menu: '#menu',
      verticalCentered: false,
      navigation: false
    };
   }

  ngOnInit() {
  }

}

