import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { ServiceDetailsRoutingModule } from './service-details-routing.module';
import { ServiceDetailsComponent } from './service-details.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ServiceDetailsRoutingModule,
        HttpModule,
        CarouselModule
    ],
    declarations: [
        ServiceDetailsComponent
    ],
    providers:[],
    exports:[]
})
export class ServiceDetailsModule {
}
