import {AppComponent} from "../app.component";
import {Type} from "@angular/core";
import {hasAuthority, hasRole} from "../services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

export function PreAuthorize(config: {
  roles?: string[],
  authorities?: string[],
  authorizedMessage?: string,
}) {
  return function (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {

    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      const isAuthorizedResult = await isAuthorized(config);
      if (isAuthorizedResult) {
        return originalMethod.apply(this, args);
      } else {
        const snackBar: MatSnackBar = AppComponent.INJECTOR.get<MatSnackBar>(
          MatSnackBar as Type<MatSnackBar>
        );
        snackBar.open(config?.authorizedMessage ?? "Bu işlem için yetkiniz yok!", "", {
          duration: 3000
        });
        return undefined;
      }
    };

    return descriptor;
  };
}

async function isAuthorized(config: {
  roles?: string[],
  authorities?: string[],
}) {
  //promise dönseydik
  //const roleCheck = config.roles?.length ?  await hasRole(config.roles) : false;
  const roleCheck = config.roles?.length ? hasRole(config.roles) : false;
  const authorityCheck = config.authorities?.length ? hasAuthority(config.authorities) : false;

  return roleCheck || authorityCheck;
}
