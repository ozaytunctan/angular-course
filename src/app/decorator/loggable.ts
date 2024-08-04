import {AppComponent} from "../app.component";
import {AuthService} from "../services/auth.service";
import {Type} from "@angular/core";

export function Loggable() {
  return (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {

    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      console.log(`${propertyKey} Başladı.`)
      let result = originalMethod.apply(this, args);
      console.log(`${propertyKey} Bitti.`)
      return result;
    }
    return descriptor;
  }
}
