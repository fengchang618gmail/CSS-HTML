import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { FlexComponent } from './flex/flex.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FlexModule } from './flex/flex.module';


@NgModule({
  declarations: [
    AppComponent,
    FlexComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FlexModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
