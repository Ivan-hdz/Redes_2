export class MyFile {
  name: string;
  size: string;
  path: string;

  constructor(name: string = 'Example file', size: string = '10 MB', path: string = 'http://google.com') {
    this.name = name;
    this.size = size;
    this.path = path;
  }
}
