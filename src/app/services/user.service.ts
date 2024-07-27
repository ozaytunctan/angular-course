import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {toSignal} from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //
  // private url = "https://jsonplaceholder.typicode.com/users";
  //
  // private http: HttpClient = inject(HttpClient);
  //
  // users = toSignal(this.http.get(this.url, {}), {initialValue: []});

  users = getUsers();
}

export interface User {
  id: string,
  name: string,
  username: string,
  email: string,
  address: [];
}

export function getUsers() {
  const http = inject(HttpClient);
  return toSignal(http.get<User[]>("https://jsonplaceholder.typicode.com/users", {}), {initialValue: []});
}
