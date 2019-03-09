import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {resource} from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class RESTService {
  endPoint: string;
  private defaultHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8'
    }),
    responseType: 'json' as 'json'
  };
  constructor(private http: HttpClient) {
    this.endPoint = 'http://10.100.79.140:3000/';
  }

    doGet<T>(res: string, body: any = null): Promise<T> {
     const httpOpt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
      }),
      responseType: 'json' as 'json',
      params: body
    };
     return this.http.get<T>(this.endPoint + res, httpOpt).toPromise();
  }

  async doPost<T>(res: string, objectToPost: any): Promise<T> {
    return this.http.post<T>(this.endPoint + res, objectToPost, this.defaultHttpOptions).toPromise();
  }
  async doPatch<T>(res: string, updatedObject: any): Promise<T> {
    return this.http.patch<T>(this.endPoint + res , updatedObject, this.defaultHttpOptions).toPromise();
  }
  async doDelete<T>(res: string, body: any = null): Promise<T> {
    const httpOpt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
      }),
      responseType: 'json' as 'json',
      params: body
    };
    return this.http.delete<T>(this.endPoint + res, httpOpt).toPromise();
  }
}
