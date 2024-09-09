import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withPreloading,
  withRouterConfig,
  withViewTransitions
} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideCompanyTitleStrategy} from "./services/title-strategy";
import {CustomPreloadingStrategy} from "./services/custom-preload.strategy";
import {LOGGER_FACTORY} from "./services/logger.service";

export const appConfig: ApplicationConfig = {
  providers: [
    LOGGER_FACTORY,
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes,
      withPreloading(CustomPreloadingStrategy),
      withViewTransitions(),
      withRouterConfig({paramsInheritanceStrategy: 'always'}),
      withComponentInputBinding()
    ),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    provideCompanyTitleStrategy()
  ]
};
