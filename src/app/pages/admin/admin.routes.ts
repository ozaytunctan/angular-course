import {Routes} from "@angular/router";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {statisticDataResolver} from "../../resolver/resolver";


const adminRoutes: Routes = [
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
];

export default adminRoutes;
