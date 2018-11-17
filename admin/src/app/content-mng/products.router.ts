import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
const ContentMNGRoutes: Routes = [
  	{ path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(ContentMNGRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class ProductsRouterModule {}