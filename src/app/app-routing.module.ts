import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component'
import { RegisterComponent } from './views/pages/register/register.component';
import {LogsComponent} from "./pages/logs/logs.component";
import {ComputersComponent} from "./pages/computers/computers.component";
import {RequestsComponent} from "./pages/requests/requests.component";
import {MsgLogComponent} from "./pages/logs/msg-log/msg-log.component";
import {AlertLogComponent} from "./pages/logs/alert-log/alert-log.component";
import {ConfigAddComponent} from "./views/dashboard/config-add/config-add.component";
import {ConfigTypeComponent} from "./views/dashboard/config-type/config-type.component";
import {ConfigScheduleComponent} from "./views/dashboard/config-schedule/config-schedule.component";
import {EditComputerComponent} from "./pages/computers/edit-computer/edit-computer.component";
import {AddGroupComponent} from "./pages/computers/add-group/add-group.component";
import {ChangeGroupComponent} from "./pages/computers/change-group/change-group.component";
import {AuthorizationComponent} from "./pages/authorization/authorization.component";
import {TestComponent} from "./pages/test/test.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authorization',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {path: 'logs',
        component: LogsComponent},
      {path: 'computers',
        component: ComputersComponent },
      {path: 'computers/editgroup',
      component: ChangeGroupComponent},
      {path: 'computers/addgroup',
      component: AddGroupComponent},
      {path: 'requests',
        component: RequestsComponent},
      {path: 'test',
        component: TestComponent},
      {path: 'logs/messages',
        component: MsgLogComponent},
      {path: 'logs/alert',
        component: AlertLogComponent},
      {path: 'dashboard/configadd',
        component: ConfigAddComponent},
      {path: 'dashboard/configtype',
        component: ConfigTypeComponent},
      {path: 'dashboard/configschedule',
        component: ConfigScheduleComponent},
      {path: 'computers/editcomputer',
      component: EditComputerComponent},
      {path: 'auth',
        component:AuthorizationComponent},


      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule)
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
