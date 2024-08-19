import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {authGuard, canChildGuard, canMatchGuard, noAuthGuard} from "./quards/quards";
import {LayoutComponent} from "./layouts/layout.component";

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        canActivate: [noAuthGuard],
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
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
  }];
