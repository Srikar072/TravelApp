/*import { Routes } from '@angular/router';
//import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { AboutUsComponent } from './about-us/about-us.component';
//import { ContactUsComponent } from './contact-us/contact-us.component';

export const appRoutes: Routes = [
  //{ path: '', component: HomeComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'about-us', component: AboutUsComponent },
 // { path: 'contact-us', component: ContactUsComponent },
  { path: '**', redirectTo: '' }  // Redirect invalid paths to HomeComponent
];
*/

/*
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TravelListComponent } from './travel-list/travel-list.component';
//import { TourSearchComponent } from './tour-search/tour-search.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },                     // Home page
  { path: 'destinations', component: TravelListComponent },   // Travel List page
 // { path: 'tour-search', component: TourSearchComponent },    // New Tour Search page
  { path: '**', redirectTo: '' }                              // Fallback to home for non-existent routes
];
*/

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { BookingComponent } from './booking/booking.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { FormComponent } from './forms/forms.component';
import { AddcityComponent } from './addcity/addcity.component';


export const routes: Routes = [
    
    {path:'home',component:HomeComponent},
    {path:'aboutus',component:AboutUsComponent},
    {path:'travellist',component:TravelListComponent},
    {path:'contactus',component:ContactUsComponent},
    {path:'traveldetails/:tourID',component:TravelDetailsComponent},
    {path:'traveldetails/:id/edit', component:FormComponent},
    {path:'errorpage',component:ErrorpageComponent},
    {path:'addcity',component:AddcityComponent},
    
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path:'**', redirectTo: '/errorpage', pathMatch: 'full'},
   
];
 