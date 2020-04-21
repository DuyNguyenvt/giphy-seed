import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainHomeComponent } from './screens/main-home/main-home.component';
import { HomeRoutingModule } from './home-routing.module';
import { GiphyListComponent } from './components/giphy-list/giphy-list.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

import { AngularMaterialModule } from 'src/app/modules/common/angularMaterial/angular-material.module';

import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [MainHomeComponent, GiphyListComponent, HeaderComponent],
  imports: [AngularMaterialModule, CommonModule, HomeRoutingModule],
})
export class HomeModule {}
