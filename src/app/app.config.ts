import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withRouterConfig, withViewTransitions} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideCompanyTitleStrategy} from "./services/title-strategy";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes,
      // withHashLocation(),
      withViewTransitions(),
      withRouterConfig({paramsInheritanceStrategy: 'always'}),
      // withPreloading(PreloadAllModules)
    ),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    provideCompanyTitleStrategy()
  ]
};
