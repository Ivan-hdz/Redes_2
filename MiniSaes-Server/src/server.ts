import * as bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import * as fs from 'fs';

import {Alumno} from './classes/Alumno';
import {STORAGE_FOLDER} from './values/strings';
const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello!');
});
app.listen(3000, () => {
    if (!fs.existsSync(STORAGE_FOLDER)) {
        fs.mkdirSync(STORAGE_FOLDER);
    }
    console.log('Example app listening on port 3000!');
});
