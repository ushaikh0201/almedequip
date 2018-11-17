import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';

import { AccordionModule } from 'ngx-bootstrap/accordion';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PortfolioRoutingModule,
        HttpModule,
        AccordionModule.forRoot()
    ],
    declarations: [
        PortfolioComponent
    ],
    providers:[],
    exports:[]
})
export class PortfolioModule {
}
