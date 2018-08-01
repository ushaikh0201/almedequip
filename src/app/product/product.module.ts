import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ProductRoutingModule,
        HttpModule
    ],
    declarations: [
        ProductComponent
    ],
    providers:[],
    exports:[]
})
export class ProductModule {
}
