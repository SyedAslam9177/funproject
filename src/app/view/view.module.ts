import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ViewRoutingModule } from './view.routing';

@NgModule({
  imports: [
    CommonModule,
    ViewRoutingModule
  ],
  declarations: [HomeComponent]
})
export class ViewModule { }
