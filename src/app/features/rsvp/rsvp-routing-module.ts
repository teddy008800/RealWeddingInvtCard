import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Rsvp } from './rsvp';

const routes: Routes = [{ path: '', component: Rsvp }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RsvpRoutingModule { }
