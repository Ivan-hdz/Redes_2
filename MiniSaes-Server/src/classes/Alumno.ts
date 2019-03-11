import fs from 'fs';
import {ALUMNO_FOLDER} from '../values/strings';
import {Grupo} from './Grupo';

export class Alumno {
    public static serialize(al: Alumno) {
        if (!fs.existsSync(ALUMNO_FOLDER)) {
            fs.mkdirSync(ALUMNO_FOLDER);
        }
        fs.writeFile(ALUMNO_FOLDER + al.boleta, JSON.stringify(al),  (err) => {
            if (err) { throw err; }
            console.log('Saved!');
        });
    }
    public static deserialize(id: string): Alumno | null {
        if (fs.existsSync(ALUMNO_FOLDER)) {
            if (fs.existsSync(ALUMNO_FOLDER + id)) {
                 return JSON.parse(fs.readFileSync(ALUMNO_FOLDER + id).toString('UTF-8'));
            }
        }
        return null;
    }
    public boleta: number;
    public nombre: string;
    public pApellido: string;
    public sApellido: string;
    public urlFoto: string;
    public grupo: Grupo;

    constructor() {
        this.boleta = 0;
        this.nombre = '';
        this.pApellido = '';
        this.sApellido = '';
        this.urlFoto = '';
        this.grupo = new Grupo();
    }
}
