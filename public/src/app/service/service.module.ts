import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServiceComponent } from './service.component';
import { ServiceRoutingModule } from './service-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ServiceRoutingModule
    ],
    declarations: [
        ServiceComponent,
    ],
    providers:[],
    exports:[]
})
export class ServiceModule {
}
