import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing-module';
import { Location } from './location';


@NgModule({
  declarations: [
    Location
  ],
  imports: [
    CommonModule,
    LocationRoutingModule
  ]
})
export class LocationModule { }
