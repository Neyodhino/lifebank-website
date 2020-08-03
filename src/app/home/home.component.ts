import { Component, OnInit, Inject, Renderer2, ViewChild, ElementRef} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DataService } from '../core/service/data.service';
import { error } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('fullpageRef', {static: false}) fp_directive: ElementRef;
  config;
  fullpage_api;
  productMoved: any;
  hospitalServed: any;
  countries: any;
  saved: any;

  constructor(
    @Inject(DOCUMENT) document,
    private renderer: Renderer2,
    private data: DataService
  ) {
    this.config = {
      licenseKey: '987535C4-2B0E4F06-ACD6C3B3-F3FB48C9',
      verticalCentered: false,
      // easingcss3: 'cubic-bezier(0.45, 0, 0.55, 1)',
      // scrollingSpeed: 400,
      navigation: true,
      scrollOverflow: true,
    };
  }


  ngOnInit(): void {
    this.data.getAchievement().subscribe(response => {
      this.productMoved = response['Product Moved'];
      this.hospitalServed = response['Hospital Served'];
      this.countries = response['countries'];
      this.saved = response['saved']
    },
    error => {
      console.log(error);
    });
  }
}

