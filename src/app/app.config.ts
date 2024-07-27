import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withRouterConfig} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient, withFetch} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes,
      // withHashLocation(),
      withRouterConfig({paramsInheritanceStrategy: 'always'}),
      // withPreloading(PreloadAllModules)
    ),
    provideHttpClient(withFetch())
  ]
};
