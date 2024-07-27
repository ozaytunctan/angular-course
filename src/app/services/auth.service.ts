import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


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

}

export function hasRole(roles: string[] | any[]) {
  if (roles == null || roles.length == 0) {
    return false;
  }

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
