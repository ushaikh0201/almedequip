import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';
// import { ProductComponent } from './product/product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SupportComponent } from './support/support.component';
import { FaqComponent } from './faq/faq.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import { OfferComponent } from './offer/offer.component';
import { BlogComponent } from './blog/blog.component';
import { CampaignComponent } from './campaign/campaign.component';
import { VideoListComponent } from './video-list/video-list.component';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';

// const routes: Routes = [
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'dashboard', component: DashboardComponent},
//   { path: 'full', component: FullLayoutComponent},
// ];

const appRoutes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    //canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'products', loadChildren: './product/product.module#ProductModule' },
      { path: 'product-details', loadChildren: './product-details/product-details.module#ProductDetailsModule' },
      { path: 'services', loadChildren: './service/service.module#ServiceModule' },
      { path: 'service-details', loadChildren: './service-details/service-details.module#ServiceDetailsModule' },
      { path: 'portfolio', loadChildren: './portfolio/portfolio.module#PortfolioModule' },
      { path: 'portfolio-details', loadChildren: './portfolio-details/portfolio-details.module#PortfolioDetailsModule' },
      { path: 'support', component: SupportComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'news', component: NewsComponent }, 
      { path: 'events', component: EventsComponent },
      { path: 'campaign', component: CampaignComponent },
      { path: 'offer', component: OfferComponent },
      { path: 'blog', component: BlogComponent },
    ]
  }, 
  // {
  //   path: 'simpleLayout',
  //   component: SimpleLayoutComponent,
  //   children: [
  //     { path: 'login', component: LoginComponent },
  //   ]
  // }
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(appRoutes),
    AccordionModule.forRoot(),
    CarouselModule.forRoot()
  ], //{useHash: true}
  exports: [ RouterModule ],
  declarations: [
    DashboardComponent,
    AboutUsComponent,
    ContactUsComponent,
    SupportComponent,
    FaqComponent,
    EventsComponent,
    OfferComponent,
    BlogComponent,
    CampaignComponent,
    NewsComponent,
    VideoListComponent
  ]
})

export class AppRoutingModule {}