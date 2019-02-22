import { Component, OnInit } from '@angular/core';
import {Directory} from '../../classes/Directory';
import {MyFile} from '../../classes/MyFile';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.styl']
})
export class ToolboxComponent implements OnInit {
  actualDirectory: Directory;
  constructor() {
    if (this.actualDirectory == null) {
      this.actualDirectory = new Directory();
      this.actualDirectory.files.push(new MyFile());
      const a = new Directory('Carpeta nueva', '30 MB');
      a.parent = this.actualDirectory;
      this.actualDirectory.directories.push(a);
      const b = new Directory('Carpeta vieja', '50 MB');
      b.parent = this.actualDirectory;
      this.actualDirectory.directories.push(b);
    }
  }
  goBack() {
    if(this.actualDirectory.parent !== null) {
      this.actualDirectory = this.actualDirectory.parent;
    } else {
      return false;
    }
  }
  ngOnInit() {
  }

}
