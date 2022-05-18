import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component'
import { RegisterComponent } from './views/pages/register/register.component';
import {LogsComponent} from "./pages/logs/logs.component";
import {RequestsComponent} from "./pages/requests/requests.component";
import {MsgLogComponent} from "./pages/logs/msg-log/msg-log.component";
import {AlertLogComponent} from "./pages/logs/alert-log/alert-log.component";
import {ConfigAddComponent} from "./views/dashboard/config-add/config-add.component";
import {ConfigTypeComponent} from "./views/dashboard/config-type/config-type.component";
import {ConfigScheduleComponent} from "./views/dashboard/config-schedule/config-schedule.component";
import {EditComputerComponent} from "./pages/computers/edit-computer/edit-computer.component";
import {ChangeGroupComponent} from "./pages/computers/change-group/change-group.component";
import {AuthorizationComponent} from "./pages/authorization/authorization.component";
import {TestComponent} from "./pages/test/test.component";
import {ComputersComponent} from "./pages/computers/computers.component";
import {HomeComponent} from "./pages/home/home.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
        canActivate: [AuthGuard],
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {path:'home',
      component:HomeComponent,
        canActivate: [AuthGuard]},
      {path: 'logs',
        component: LogsComponent,
        canActivate: [AuthGuard]},
      {path: 'computers',
        component: ComputersComponent,
        canActivate: [AuthGuard]},
      { path: 'groups/:id', component: ChangeGroupComponent, canActivate: [AuthGuard] },
      //{ path: 'groups/new', component: , canActivate: [AuthGuard] },

      {path: 'requests',
        component: RequestsComponent,
        canActivate: [AuthGuard]},
      {path: 'test',
        component: TestComponent,
        canActivate: [AuthGuard]},
      {path: 'logs/messages',
        component: MsgLogComponent,
        canActivate: [AuthGuard]},
      {path: 'logs/alert',
        component: AlertLogComponent,
        canActivate: [AuthGuard]},
      {path: 'dashboard/configadd',
        component: ConfigAddComponent,
        canActivate: [AuthGuard]},
      {path: 'dashboard/configtype',
        component: ConfigTypeComponent,
        canActivate: [AuthGuard]},
      {path: 'dashboard/configschedule',
        component: ConfigScheduleComponent,
        canActivate: [AuthGuard]},
      {path: 'auth',
        component:AuthorizationComponent},
      { path: 'computers/:id', component: EditComputerComponent, canActivate: [AuthGuard] },


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
  }
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
