import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuitRayaRoutingModule } from './duit-raya-routing-module';
import { DuitRaya } from './duit-raya';


@NgModule({
  declarations: [
    DuitRaya
  ],
  imports: [
    CommonModule,
    DuitRayaRoutingModule
  ]
})
export class DuitRayaModule { }
