import { Component, OnInit } from '@angular/core';
import {Directory} from '../../classes/Directory';
import {MyFile} from '../../classes/MyFile';
import {DirectoryService} from '../../services/directory.service';
import {FileService} from '../../services/file.service';

odeclare const SocketIOFileUpload: any;
declare const io: any;
@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.styl']
})
export class ToolboxComponent implements OnInit {
  actualDirectory: Directory;
  fileToUpload: File = null;

  constructor(private dirServ: DirectoryService, private fileServ: FileService) {
    if (this.actualDirectory == null) {
      this.actualDirectory = new Directory();
      this.getDirectory();
    }
  }
  async getDirectory(absolutePath: string = 'usr1') {
    const dir = await this.dirServ.get(absolutePath);
    if (dir) {
      this.actualDirectory = dir;
    }
  }


  async createFolder() {
    const succ = await this.dirServ.post(this.actualDirectory.path + '/nueva_carpeta');
    this.getDirectory(this.actualDirectory.path);
  }
  goBack() {
    if (this.actualDirectory.parent !== '' && this.actualDirectory.parent != null) {
      this.getDirectory(this.actualDirectory.parent);
    } else {
      return false;
    }
  }
  ngOnInit() { 
      this.initSocket();
  }
  initSocket() {
    // Initialize instances:
    const socket = io.connect('http://10.100.79.140:3000');
    const siofu = new SocketIOFileUpload(socket);
    siofu.addEventListener('start', async (event) => {
      await socket.emit('chdir', this.actualDirectory.path);
    });
    // Configure the three ways that SocketIOFileUpload can read files:
    document.getElementById('upload_btn').addEventListener('click', siofu.prompt, false);
    siofu.listenOnDrop(document.getElementById('file_drop'));

    // Do something on upload progress:
    siofu.addEventListener('progress', (event) => {
      const percent = event.bytesLoaded / event.file.size * 100;
      console.log('File is', percent.toFixed(2), 'percent loaded');
    });

    // Do something when a file is uploaded:
    siofu.addEventListener('complete', (event) => {
      console.log(event.success);
      console.log(event.file);
      this.getDirectory(this.actualDirectory.path);
    });

  }
}
