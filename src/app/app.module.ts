import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import generated components
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule }     from './app-routing.module';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

// Import your library
import { OwlModule } from 'ngx-owl-carousel';
import { FullLayoutComponent } from './full-layout/full-layout.component';

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
    OwlModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
