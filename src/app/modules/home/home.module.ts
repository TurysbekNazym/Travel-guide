import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ScotlandComponent } from './components/scotland/scotland.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LondonComponent } from './components/london/london.component';



@NgModule({
  declarations: [
    ScotlandComponent,
    HomeComponent,
    LondonComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule
  ]
})
export class HomeModule { }
