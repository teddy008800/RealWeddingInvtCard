import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RsvpRoutingModule } from './rsvp-routing-module';
import { Rsvp } from './rsvp';


@NgModule({
  declarations: [
    Rsvp
  ],
  imports: [
    CommonModule,
    RsvpRoutingModule
  ]
})
export class RsvpModule { }
