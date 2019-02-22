import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Directory} from '../../classes/Directory';
import {MyFile} from '../../classes/MyFile';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.styl']
})
export class ContainerComponent implements OnInit {
  @Input('directory-object') directory: Directory;
  @Output('fileToDelete') fileToDelete: EventEmitter<MyFile> = new EventEmitter<MyFile>();
  @Output('dirToDelete') dirToDelete: EventEmitter<Directory> = new EventEmitter<Directory>();
  @Output('onDirOpened') dirOpenedEmitter: EventEmitter<Directory> = new EventEmitter<Directory>();
  constructor() {
    if (this.directory == null) {
      this.directory = new Directory();
      this.directory.files.push(new MyFile());
      this.directory.directories.push(new Directory('Carpeta nueva', '30 MB'));
      this.directory.directories.push(new Directory('Carpeta nueva', '30 MB'));
    }
  }
  onDbClickElem(id: string) {
    const inputElem = window.document.getElementById(id) as HTMLInputElement;
    if (inputElem.disabled === true) {
      inputElem.disabled = false;
    }
  }
  onSubmitElem(id: string, elem: MyFile | Directory) {
    const inputElem = window.document.getElementById(id) as HTMLInputElement;
    if (inputElem.disabled === false) {
      inputElem.disabled = true;
    }
    if (elem instanceof MyFile) {
      // Do file things
    } else if (elem instanceof Directory) {
      // Do directory things
    }
  }
  onDirOpened(dir: Directory) {
    this.dirOpenedEmitter.emit(dir);
  }
  onDeleteDir() {

  }
  onDeleteFile() {

  }
  ngOnInit() {
  }

}
