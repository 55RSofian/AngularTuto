import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { SharedPublicModule } from './shared-public/shared-public.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HomeModule,
    LoginModule,
    RegisterModule,
    SharedPublicModule,
  ]
})
export class PublicModule { }
