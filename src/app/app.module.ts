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
import { SupportComponent } from './support/support.component';
import { FaqComponent } from './faq/faq.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import { CampaignComponent } from './campaign/campaign.component';
import { OfferComponent } from './offer/offer.component';
import { BlogComponent } from './blog/blog.component';
import { VideoListComponent } from './video-list/video-list.component';

import {APP_BASE_HREF} from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    FullLayoutComponent,
    DashboardComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    AccordionModule.forRoot() 
  ],
  exports:[],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
