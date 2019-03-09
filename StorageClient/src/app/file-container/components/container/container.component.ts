import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Directory} from '../../classes/Directory';
import {MyFile} from '../../classes/MyFile';
import {DirectoryService} from '../../services/directory.service';
import {FileService} from '../../services/file.service';

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
  constructor(private dirServ: DirectoryService, private fileServ: FileService) {
    if (this.directory ==  null) {
      this.directory = new Directory();
    }
  }
  onDbClickElem(id: string) {
    const inputElem = window.document.getElementById(id) as HTMLInputElement;
    if (inputElem.disabled === true) {
      inputElem.disabled = false;
    }
  }
  async onSubmitElem(id: string, elem: MyFile | Directory) {
    const inputElem = window.document.getElementById(id) as HTMLInputElement;
    if (inputElem.disabled === false) {
      inputElem.disabled = true;
    }

    let newPath = '';
    const strSplit = elem.path.split('/');
    for (let i = 1; i < strSplit.length; i++) {
      newPath += strSplit[i - 1] + '/';
    }
    newPath += inputElem.value;
    // @ts-ignore
    if (elem.parent === undefined) {
      // Do file things
      await this.fileServ.rename(elem.path, newPath);
    } else {
      // Do directory things
      await this.dirServ.rename(elem.path, newPath);
      this.refreshDirectory();
    }
  }
  async getFile(f: MyFile) {
    await this.fileServ.get(f.path);
  }
  async refreshDirectory() {
    this.directory = await this.dirServ.get(this.directory.path);
  }
  onDirOpened(dir: Directory) {
    this.dirOpenedEmitter.emit(dir);
  }
  async onDeleteDir(dir: Directory) {
    await this.dirServ.delete(dir.path);
    this.refreshDirectory();
  }
  async onDeleteFile(file: MyFile) {
    await this.fileServ.delete(file.path);
    this.refreshDirectory();
  }
  ngOnInit() {
  }

}
