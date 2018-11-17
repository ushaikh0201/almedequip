import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRouterModule } from './products.router';
import { ProductsComponent } from './products/products.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
			MatButtonModule,
			MatToolbarModule,
			MatCardModule,
			MatTabsModule,
			MatIconModule,} from '@angular/material';
import { MatInputModule } from '@angular/material';
import {  ReactiveFormsModule } from '@angular/forms';

import { FormsModule }   from '@angular/forms';
@NgModule({
	imports: [
		CommonModule,
		ProductsRouterModule,
		FlexLayoutModule,
		MatButtonModule,
		MatToolbarModule,
		MatCardModule,
		MatTabsModule,
		MatIconModule,
		 MatInputModule,
		 ReactiveFormsModule,
		 FormsModule
	],
	declarations: [ProductsComponent]
})
export class ProductsModule { }
