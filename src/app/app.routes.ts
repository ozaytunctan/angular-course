import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AdminLayoutComponent} from "./core/layouts/admin-layout/admin-layout.component";
import {authGuard, canMatchGuard, noAuthGuard} from "./quards/quards";
import {AdminDashboardComponent} from "./pages/admin/admin-dashboard/admin-dashboard.component";
import {statisticDataResolver} from "./resolver/resolver";

export const routes: Routes = [

    {
      path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
      path: 'home',
      canActivate: [noAuthGuard],
      component: HomeComponent
    },

    {
      path: 'admin',
      canActivate: [authGuard],
      canMatch: [canMatchGuard],
      component: AdminLayoutComponent,
      children: [
        {
          path: '', redirectTo: 'dashboard', pathMatch: 'full'
        },
        {
          path: 'dashboard', component: AdminDashboardComponent,
          resolve: {statisticData: statisticDataResolver},
          data: {
            admin: true
          }
        }
      ]
    }

  ]
;
