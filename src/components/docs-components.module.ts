import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CalloutModule, NavModule, TabsModule, UtilitiesModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { DocsExampleComponent } from './docs-example/docs-example.component';
import { DocsLinkComponent } from './docs-link/docs-link.component';
import { DocsCalloutComponent } from './docs-callout/docs-callout.component';
import { AddIconComponent } from './icon-compoments/add-icon/add-icon.component';
import { LocationTableComponent } from './location-table/location-table.component';
import { RequestTableComponent } from './request-table/request-table.component';
import { ComputerTableComponent } from './computer-table/computer-table.component';
import { GroupListComponent } from './group-list/group-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CheckboxTableComponent } from './checkbox-table/checkbox-table.component';

@NgModule({
  declarations: [
    DocsExampleComponent,
    DocsLinkComponent,
    DocsCalloutComponent,
    AddIconComponent,
    LocationTableComponent,
    RequestTableComponent,
    ComputerTableComponent,
    GroupListComponent,
    CheckboxTableComponent,
  ],
  exports: [
    DocsExampleComponent,
    DocsLinkComponent,
    DocsCalloutComponent,
    AddIconComponent,
    LocationTableComponent,
    RequestTableComponent,
    ComputerTableComponent,
    GroupListComponent,
    CheckboxTableComponent,
  ],
  imports: [
    CommonModule,
    NavModule,
    IconModule,
    RouterModule,
    TabsModule,
    UtilitiesModule,
    CalloutModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DocsComponentsModule {
}
