import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ProductDetailsRoutingModule,
        AccordionModule.forRoot(),
        CarouselModule.forRoot()
    ],
    declarations: [
        ProductDetailsComponent
    ],
    providers:[],
    exports:[]
})
export class ProductDetailsModule {
}
