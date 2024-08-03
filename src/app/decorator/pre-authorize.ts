import {AppComponent} from "../app.component";
import {Type} from "@angular/core";
import {AuthService} from "../services/auth.service";

export function PreAuthorize(...roles: string[]) {
  return (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {

    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {

      const authService = AppComponent.INJECTOR.get<AuthService>(
        AuthService as Type<AuthService>
      );

      let authorized = authService.hasRole(roles);
      if (authorized) {
        return originalMethod.apply(this, args);
      }
    }

    return descriptor;
  }

}
