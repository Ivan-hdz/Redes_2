import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RESTService {
  private endPoint: string;
  private defaultHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8'
    }),
    responseType: 'json' as 'json'
  };
  constructor(private http: HttpClient) {
    this.endPoint = 'http://localhost:8080/';
  }
  // @ts-ignore
  async doGet<T>(resource: string): Promise<T> {
    return this.http.get<T>(this.endPoint + resource).toPromise();
  }
  // @ts-ignore
  async doGet<T>(resource: string, id: string): Promise<T> {
    return this.http.get<T>(this.endPoint + resource + '/' + id).toPromise();
  }
  async doPost<T>(resource: string, objectToPost: any): Promise<T> {
    return this.http.post<T>(this.endPoint + resource, objectToPost, this.defaultHttpOptions).toPromise();
  }
  async doPatch<T>(resource: string, id: string, updatedObject: any): Promise<T> {
    return this.http.patch<T>(this.endPoint + resource + '/' + id, updatedObject, this.defaultHttpOptions).toPromise();
  }
  async doDelete<T>(resource: string, id: string): Promise<T> {
    return this.http.delete<T>(this.endPoint + resource + '/' + id).toPromise();
  }
}
