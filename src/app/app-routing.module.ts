import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ResourcesComponent } from './resources/resources.component';
import { AboutUsComponent } from './resources/about-us/about-us.component';


const routes: Routes = [
  {
    path: '',
    component: ResourcesComponent,
  },  
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
 // exports: [RouterModule]
  exports: []
})
export class AppRoutingModule { }
