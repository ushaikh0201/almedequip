import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
// Import generated components
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

import { AppRoutingModule }     from './app-routing.module';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { DataServices } from './services/data-services';
// import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    FullLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }, DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
