import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { UserModel } from '../model/user.model';
import { Config } from '../config';

@Injectable()
export class AuthentificationService {

  constructor(
    private http: Http
  ) {}


  login(user): Observable<UserModel> {
    return this.http.post(Config.apiUrl + '/login', user)
    .map(res => res.json())
  }
}
