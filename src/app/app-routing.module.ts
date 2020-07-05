import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ImpactComponent } from './impact/impact.component';
import { VisionComponent } from './vision/vision.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { CareersComponent } from './careers/careers.component';
import { InnovationComponent } from './innovation/innovation.component';
import { CfoComponent } from './cfo/cfo.component';
import { CgoComponent } from './cgo/cgo.component';
import { CmComponent } from './cm/cm.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'impact', component: ImpactComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'hospitals', component: HospitalsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'innovation', component: InnovationComponent },
  { path: 'careers/cfo', component: CfoComponent },
  { path: 'careers/cgo', component: CgoComponent },
  { path: 'careers/cm', component: CmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
