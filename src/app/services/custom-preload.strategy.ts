import {PreloadingStrategy, Route} from "@angular/router";
import {map, Observable, of, timer} from "rxjs";
import {Injectable} from "@angular/core";

interface PreloadData {
  preload: boolean;
  delay?: number;
}

@Injectable({providedIn: 'root'})
export class CustomPreloadingStrategy implements PreloadingStrategy {

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    const preloadData = route.data && route.data['preloadData'] as PreloadData;
    if (preloadData && preloadData.preload) {
      const loadRoute = (delay: number) => delay > 0 ? timer(delay).pipe(map(() => fn())) : fn();
      return loadRoute(preloadData.delay ?? 0);
    }
    return of(null);
  }
}
