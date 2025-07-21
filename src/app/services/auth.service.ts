import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";


@Injectable({providedIn: 'root'})
export class AuthService {


  constructor(private http: HttpClient) {
  }

  hasAuthority(authorities: string[] | any[]): boolean {
    return hasAuthority(authorities);
  }

  hasRole(roles: string[] | any[]): boolean {
    return hasRole(roles);
  }

  register(registerValue: any): Observable<any> {
    return of();

  }
}

export function hasRole(roles: string[] | string) {
  if (roles == null) {
    return false;
  }

  const newRoles= Array.isArray(roles) ? roles : [roles];
  const defaultUserRoles = ['ADMIN_ROLE', 'CREATE_ROLE', 'USER_ROLE', 'READ_ROLE'];
  return defaultUserRoles.some(role => newRoles.includes(role));

  // role kontolü yap sonra yetkilendir.
  // const http = inject(HttpClient);
  return true;
}

export function hasAuthority(authorities: string[] | any[]) {
  if (authorities == null || authorities.length == 0) {
    return false;
  }

  // role kontolü yap sonra yetkilendir.
  // const http: HttpClient = inject(HttpClient);
  return true;
}
