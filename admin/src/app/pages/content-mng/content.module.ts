import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ContentRoutingModule, routedComponents } from './content-routing.module';
import { ValidationModule } from '../../validators/validation.module';
import { ValidationService } from '../../validators/validation.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContentMngService } from "../../../../common/services/content-mng.service";

import { SmartTableService } from '../../@core/data/smart-table.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
@NgModule({
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    ThemeModule,
    ContentRoutingModule,
    ValidationModule,
    Ng2SmartTableModule
  ],
  providers:[ValidationService, ContentMngService, SmartTableService],
  declarations: [
    ...routedComponents,
  ],
})
export class ContentModule { }
