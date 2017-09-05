import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlexComponent } from './flex/flex.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'flex',
    component: FlexComponent,
  },
  {
    path: '',
    redirectTo: '/flex',
    pathMatch: 'full',
    data: { title: 'CSS & HTML' },
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: { title: '404 Not Found' },
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule,
  ]
 })

export class AppRoutingModule { }
