import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home.component';
import { MainHomeComponent } from './screens/main-home/main-home.component';
import { HomeRoutingModule } from './home-routing.module';
import { GiphyListComponent } from './components/giphy-list/giphy-list.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
// import { MainHomeComponent } from './screens/main-home/main-home.component';

// const routes: Routes = [{ path: '', component: MainHomeComponent }];

@NgModule({
  declarations: [MainHomeComponent, GiphyListComponent, HeaderComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
