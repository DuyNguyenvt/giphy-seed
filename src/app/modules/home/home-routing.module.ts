import { RouterModule, PreloadAllModules, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainHomeComponent } from './screens/main-home/main-home.component';
import { FavoriteGiphiesComponent } from './screens/favorite-giphies/favorite-giphies.component';

const routes: Routes = [
  {
    path: '',
    component: MainHomeComponent,
  },
  {
    path: 'favorite',
    component: FavoriteGiphiesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
