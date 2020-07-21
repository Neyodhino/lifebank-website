import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { VisionContactComponent } from '../vision-contact/vision-contact.component';

declare var particlesJS: any;
@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss']
})
export class VisionComponent implements OnInit {
  @ViewChild('fullpageRef', {static: false}) fp_directive: ElementRef;
  config;
  fullpage_api;
  public lottieConfig: Object;

  constructor(private renderer: Renderer2, private dialog: MatDialog) {
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      menu: '#menu',
      verticalCentered: false,
      navigation: false,
    };
   }

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/particless.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(VisionContactComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

