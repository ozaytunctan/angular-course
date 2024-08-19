import {
  ActivatedRouteSnapshot, CanActivateChildFn,
  CanActivateFn,
  CanDeactivateFn,
  CanMatchFn,
  Route,
  RouterStateSnapshot, UrlSegment
} from "@angular/router";


export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  return true;
}

export const noAuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  return true;
}

export const canDeactivateGuard: CanDeactivateFn<any> =
  (component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) => {

    return true;
  }

export const canChildGuard: CanActivateChildFn = (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return true;
}

export const canMatchGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  return true;
}
