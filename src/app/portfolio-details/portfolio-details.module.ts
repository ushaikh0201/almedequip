import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { PortfolioDetailsRoutingModule } from './portfolio-details-routing.module';
import { PortfolioDetailsComponent } from './portfolio-details.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PortfolioDetailsRoutingModule,
        HttpModule
    ],
    declarations: [
        PortfolioDetailsComponent
    ],
    providers:[],
    exports:[]
})
export class PortfolioDetailsModule {
}
