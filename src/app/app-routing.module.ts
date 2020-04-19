import { RouterModule, PreloadAllModules, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
// import { HomeModule } from 'src/app/modules/Home/home.module';

const routes: Routes = [
  {
    path: '',
    component: null,
    children: [
      {
        path: '',
        loadChildren: 'src/app/modules/home/home.module#HomeModule',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
// loadChildren: () =>
//   import('src/app/modules/Home/home.module').then((m) => m.HomeModule),

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
