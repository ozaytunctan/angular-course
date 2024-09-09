import {Routes} from '@angular/router';
import {authGuard, canChildGuard, canMatchGuard, noAuthGuard} from "./quards/quards";
import {LayoutComponent} from "./layouts/layout.component";

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'home',
        canActivate: [noAuthGuard],
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
      },

      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component')
          .then(m => m.DashboardComponent),
      },
      {
        path: 'child',
        loadComponent: () => import('./pages/child-decorator-example/child-decorator-example.component')
          .then(m => m.ChildDecoratorExampleComponent),

      },

      // Lazy Loading com
      {
        path: 'book',
        canActivateChild: [canChildGuard],
        loadChildren: () => import('./pages/book/books.routes'),
        title: 'Books View Transition',
        data: {
          preloadData: {
            preload: true,
            delay: 5_000
          }
        }
      },
      {
        path: 'admin',
        canActivate: [authGuard],
        canMatch: [canMatchGuard],
        loadChildren: () => import('./pages/admin/admin.routes'),
        data: {
          preloadData: {
            preload: true,
            delay: 10_000
          }
        },
        title: 'Admin'
      }

    ]
  }
];
