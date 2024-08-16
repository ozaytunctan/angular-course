import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from "@angular/router";
import {of} from "rxjs";


export const statisticDataResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return of({
      logCount: 1000,
      logLevel: 10,
      data: {}
    }
  );
}
