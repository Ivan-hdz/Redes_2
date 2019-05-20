import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SERVER_1, SERVER_2, SERVER_3} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;
  nameToFind: string;
  descriptionToFind: string;
  noExiste: boolean;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.nameToFind = '';
    this.descriptionToFind = '';
    this.noExiste = true;
  }
  onSearch() {
    let targetServ = '';
    const httpConfig = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
      }),
      responseType: 'json' as 'json',
      params: {id: this.nameToFind}
    };
    if (this.filterServer(this.nameToFind) === '') {
      return;
    } else {
      targetServ = this.filterServer(this.nameToFind);
    }
    this.http.get(targetServ + '/def', httpConfig).subscribe((res) => {
      if (res[0]) {
        this.descriptionToFind = res[0].description;
        this.noExiste = false;
      } else {
        alert('Palabra no encontrada');
        this.form.reset({name: '', description: ''});
      }
    });
  }
  onSaveChanges(name: string = '', desc: string = '') {
    let targetServ = '';
    const httpConfig = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
      }),
      responseType: 'json' as 'json'
    };
    console.log(name);
    if (this.filterServer(name) === '') {
      return;
    } else {
      targetServ = this.filterServer(name);
    }
    console.log(targetServ);
    const toSend = {name: name, description: desc};
    console.log(toSend);
    this.http.post(targetServ + '/def', toSend, httpConfig).subscribe((res) => {
      console.log(res);
      this.form.reset({name: '', description: ''});
      alert('Operación exitosa');
    });
  }
  onDelete() {
    let targetServ = '';
    const httpConfig = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
      }),
      responseType: 'json' as 'json',
      params: {id: this.nameToFind}
    };
    if (this.filterServer(this.nameToFind) === '') {
      return;
    } else {
      targetServ = this.filterServer(this.nameToFind);
    }
    this.http.delete(targetServ + '/def', httpConfig).subscribe((res) => {
      alert('Palabra eliminada');
      this.descriptionToFind = '';
      this.nameToFind = '';
    });
  }
  onSubmit() {
    if (this.form.valid) {
      this.onSaveChanges(this.form.getRawValue().name, this.form.getRawValue().description);

    } else {
      alert('Todos los campos son obligatorios!');
      return;
    }
  }
  filterServer(name: string): string {
    if (name.charAt(0) >= 'a' && name.charAt(0) <= 'i') {
      return SERVER_1;
    } else if (name.charAt(0) >= 'A' && name.charAt(0) <= 'I') {
      return SERVER_1;
    } else if (name.charAt(0) >= 'J' && name.charAt(0) <= 'R') {
      return SERVER_2;
    } else if (name.charAt(0) >= 'j' && name.charAt(0) <= 'r') {
      return SERVER_2;
    } else if (name.charAt(0) >= 'Ñ') {
      return SERVER_2;
    } else if (name.charAt(0) >= 'ñ') {
      return SERVER_2;
    } else if (name.charAt(0) >= 'S' && name.charAt(0) <= 'Z') {
      return SERVER_3;
    } else if (name.charAt(0) >= 's' && name.charAt(0) <= 'z') {
      return SERVER_3;
    } else {
      alert('No es una palabra valida');
      return '';
    }
  }
}
