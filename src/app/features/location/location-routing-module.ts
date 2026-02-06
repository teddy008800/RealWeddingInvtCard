import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Location } from './location';

const routes: Routes = [{ path: '', component: Location }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
