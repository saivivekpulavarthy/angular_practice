import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'todo',
        loadChildren: () =>
          import('./todo/todoapp.module').then((m) => m.TodoappModule),
      },
      {
        path: 'covid19',
        loadChildren: () =>
          import('./covid-data/covid.module').then((m) => m.CovidModule),
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'aboutme',
    loadChildren: () =>
      import('./aboutme/aboutme.module').then((m) => m.AboutmeModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,HttpClientModule],
})
export class AppRoutingModule {}
