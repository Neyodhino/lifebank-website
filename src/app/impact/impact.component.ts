import { Component, OnInit } from '@angular/core';
import { JoinUsComponent } from '../join-us/join-us.component';
import { ContactComponent } from '../contact/contact.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-impact',
  templateUrl: './impact.component.html',
  styleUrls: ['./impact.component.scss']
})
export class ImpactComponent implements OnInit {

  constructor (
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openContact() {
    const dialogRef = this.dialog.open(ContactComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(JoinUsComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
