import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './products/product.component';
import { ButtonViewComponent } from './products/product.component';
import { ContentComponent } from './content.component';

const routes: Routes = [{
  path: '',
  component: ContentComponent,
  children: [
    {
      path: 'products',
      component: ProductComponent,
    }
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ],
  entryComponents: [
    ButtonViewComponent
  ],
})
export class ContentRoutingModule {

}

export const routedComponents = [
  ContentComponent,
  ProductComponent,
  ButtonViewComponent
];
