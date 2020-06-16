import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ImpactComponent } from './impact/impact.component';
import { VisionComponent } from './vision/vision.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { CareersComponent } from './careers/careers.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'impact', component: ImpactComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'hospitals', component: HospitalsComponent },
  { path: 'careers', component: CareersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
