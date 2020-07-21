import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { ShareModule } from './share/share.module';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ImpactComponent } from './impact/impact.component';
import { VisionComponent } from './vision/vision.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { CareersComponent } from './careers/careers.component';
import { InnovationComponent } from './innovation/innovation.component';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { CfoComponent } from './cfo/cfo.component';
import { CgoComponent } from './cgo/cgo.component';
import { CmComponent } from './cm/cm.component';
import { VisionContactComponent } from './vision-contact/vision-contact.component';
import { FulfillmentComponent } from './fulfillment-lead/fulfillment-lead.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ImpactComponent,
    VisionComponent,
    HospitalsComponent,
    CareersComponent,
    InnovationComponent,
    DemoFormComponent,
    JoinUsComponent,
    CfoComponent,
    CgoComponent,
    CmComponent,
    VisionContactComponent,
    FulfillmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ShareModule,
    BrowserAnimationsModule,
    AngularFullpageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DemoFormComponent, JoinUsComponent, ContactComponent, VisionContactComponent]
})
export class AppModule { }
