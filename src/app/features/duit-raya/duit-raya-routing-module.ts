import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DuitRaya } from './duit-raya';

const routes: Routes = [{ path: '', component: DuitRaya }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuitRayaRoutingModule { }
