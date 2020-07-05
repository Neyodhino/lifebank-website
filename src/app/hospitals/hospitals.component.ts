import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { DemoFormComponent } from '../demo-form/demo-form.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss']
})
export class HospitalsComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
  ) {

  }
  ngOnInit() {

  }

  openDialog() {
    const dialogRef = this.dialog.open(DemoFormComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
