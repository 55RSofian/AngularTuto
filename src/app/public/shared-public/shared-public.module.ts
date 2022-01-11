import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedPublicRoutingModule } from './shared-public-routing.module';
import { SomePipe } from './pipe/some.pipe';


@NgModule({
  declarations: [
    SomePipe
  ],
  imports: [
    CommonModule,
    SharedPublicRoutingModule
  ],
  exports: [
    SomePipe
  ]
})
export class SharedPublicModule { }
