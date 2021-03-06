import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }
  navigate(url: string) {
    this.router.navigate([url]);
  }
  getStringAfterLastSlash(): string {
    const buff = this.router.url.split('/');
    const str = decodeURI(buff[buff.length - 1]);
    return str;
  }

}
