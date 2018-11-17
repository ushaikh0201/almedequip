import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { PortfolioDetailsRoutingModule } from './portfolio-details-routing.module';
import { PortfolioDetailsComponent } from './portfolio-details.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-pagination-bootstrap'
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PortfolioDetailsRoutingModule,
        HttpModule,
        SelectDropDownModule,
        CarouselModule,
        PaginationModule
    ],
    declarations: [
        PortfolioDetailsComponent
    ],
    providers:[],
    exports:[]
})
export class PortfolioDetailsModule {
}
