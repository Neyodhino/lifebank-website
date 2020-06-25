import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import {MatExpansionModule} from '@angular/material/expansion';
// import {MatDialogModule} from '@angular/material/dialog';
// import { MatIconModule, MatIcon } from '@angular/material/icon';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatMenuModule } from '@angular/material/menu';
// import {MatNativeDateModule} from '@angular/material';
// import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule} from '@angular-material-components/datetime-picker';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  declarations: [ NotificationComponent ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
   ],
  exports: [ NotificationComponent, FormsModule, ReactiveFormsModule],
  providers: [],
})
export class ShareModule {}
