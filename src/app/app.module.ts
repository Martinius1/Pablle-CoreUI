import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

imports: [
  NgbModule
]

import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import { LogsComponent } from './pages/logs/logs.component';
import { ComputersComponent } from './pages/computers/computers.component';
import { RequestsComponent } from './pages/requests/requests.component';
import { AlertLogComponent } from './pages/logs/alert-log/alert-log.component';
import { MsgLogComponent } from './pages/logs/msg-log/msg-log.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComputerComponent } from './pages/computers/edit-computer/edit-computer.component';
import { ChangeGroupComponent } from './pages/computers/change-group/change-group.component';
import {DocsComponentsModule} from "@docs-components/docs-components.module";
import { AuthorizationComponent } from './pages/authorization/authorization.component';
import { TestComponent } from './pages/test/test.component';
import {TableAddPcComponent} from "./pages/computers/table-add-pc/table-add-pc.component";
import {ComputerFormComponent} from "@docs-components/computer-form/computer-form.component";
import {
  ConfigAddComputersComponentComponent
} from "@docs-components/config-add-computers-component/config-add-computers-component.component";
import { HomeComponent } from './pages/home/home.component';
import {DashboardModule} from "./views/dashboard/dashboard.module";
import {AuthGuard} from "./auth.guard";
import { TestcomponentComponent } from './views/testcomponent/testcomponent.component';
import { DashboardConfigNewComponent } from "./views/dashboard-config-new/dashboard-config-new.component";
import { DashboardConfigEditComponent } from "./views/dashboard-config-edit/dashboard-config-edit.component";
import { CreateGroupComponent } from './pages/computers/create-group/create-group.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS, LogsComponent, ComputersComponent, RequestsComponent, AlertLogComponent, MsgLogComponent, EditComputerComponent, ChangeGroupComponent, AuthorizationComponent, TestComponent, TableAddPcComponent, ConfigAddComputersComponentComponent, ComputerFormComponent, HomeComponent, TestcomponentComponent, DashboardConfigNewComponent, DashboardConfigEditComponent, CreateGroupComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    DocsComponentsModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    DashboardModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    IconSetService,
    Title,
    AuthGuard
  ],
  bootstrap: [AppComponent],
  exports: [
    TableAddPcComponent,
    ComputersComponent,
    ConfigAddComputersComponentComponent
  ]
})
export class AppModule {
}
