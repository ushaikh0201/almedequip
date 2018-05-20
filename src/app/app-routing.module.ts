import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

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
      { path: 'products', component: ProductComponent },
      { path: 'services', component: ServiceComponent },
      { path: 'support', component: DashboardComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'faq', component: DashboardComponent },
      { path: 'news', component: DashboardComponent },
      { path: 'events', component: DashboardComponent },
      { path: 'campaign', component: DashboardComponent },
      { path: 'offer', component: DashboardComponent },
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
  imports: [ RouterModule.forRoot(appRoutes, {useHash: true}) ],
  exports: [ RouterModule ],
  declarations: [
    DashboardComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProductComponent,
    ServiceComponent,
    PortfolioComponent
  ]
})

export class AppRoutingModule {}