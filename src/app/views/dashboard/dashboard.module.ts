import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { WidgetsModule } from '../widgets/widgets.module';
import { ConfigAddComponent } from './config-add/config-add.component';
import { ConfigTypeComponent } from './config-type/config-type.component';
import { ConfigScheduleComponent } from './config-schedule/config-schedule.component';
import {DocsComponentsModule} from "../../../components";
import { ConfigAddComputersComponent } from './config-add/config-add-computers/config-add-computers.component';
import { ConfigAddSourceComponent } from './config-add/config-add-source/config-add-source.component';
import { ConfigAddDestinationComponent } from './config-add/config-add-destination/config-add-destination.component';
import { ConfigAddScheduleComponent } from './config-add/config-add-schedule/config-add-schedule.component';
import { ConfigAddTypeComponent } from './config-add/config-add-type/config-add-type.component';
import {NgbDatepickerModule, NgbTimepickerModule} from "@ng-bootstrap/ng-bootstrap";
import {DashboardTableComponent} from "../../../components/dashboard-table/dashboard-table.component";

@NgModule({
  imports: [
    DashboardRoutingModule,
    CardModule,
    NavModule,
    IconModule,
    TabsModule,
    CommonModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    ChartjsModule,
    AvatarModule,
    TableModule,
    WidgetsModule,
    DocsComponentsModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    FormsModule
  ],
  declarations: [DashboardComponent, ConfigAddComponent, ConfigTypeComponent, ConfigScheduleComponent, ConfigAddComputersComponent, ConfigAddSourceComponent, ConfigAddDestinationComponent, ConfigAddScheduleComponent, ConfigAddTypeComponent, DashboardTableComponent]
})
export class DashboardModule {
}
