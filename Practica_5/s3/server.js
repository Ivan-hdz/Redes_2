const express = require('express');

const port = 3003;
const bodyParser = require('body-parser');
const https = require("https");
const fs = require("fs");

cors = require('cors');


const DEFS_FOLDER = 'definitions/';
const DEF_FILE_SUFIX = '.def';
const app = require('express')();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/def', function (req, res) {
    console.log("------ GET ------");
    console.dir(req.query);
    console.log(" - - - - - - - - ");
    const arr = new Array();
    if(req.query.id) {
        arr.push(deserialize(req.query.id));
        console.dir(arr);
        res.send(arr);
    } else {
        fs.readdir(DEFS_FOLDER, function(err, files) {
            if(err){
                console.log(err);
                res.send('error');
            }
            else {
                files.forEach(function(file, index) {
                    arr.push(deserialize(file));
                });
                console.dir(arr);
                res.send(arr);
            }
        });
    }
});
app.delete('/def', function (req, res) {
    console.log("---- DELETE ----");
    console.dir(req.query);
    console.log(" - - - - - - - -");
    res.send(deleteDef(req.query.id));
});

// app.patch('/def', function (req, res) {
   
// });

app.post('/def', function (req, res) {
    console.log("----- POST -----");
    console.dir(req.body);
    console.log(" - - - - - - - -");
    res.send(serialize(req.body));
});

function serialize(definition) {
    if (!fs.existsSync(DEFS_FOLDER)) {
        fs.mkdirSync(DEFS_FOLDER);
    }
    fs.writeFileSync(DEFS_FOLDER + definition.name , JSON.stringify(definition));
    return true
}
function deserialize(def_name){
    if (fs.existsSync(DEFS_FOLDER)) {
        if (fs.existsSync(DEFS_FOLDER + def_name)) {
             return JSON.parse(fs.readFileSync(DEFS_FOLDER + def_name).toString('UTF-8'));
        }
    }
    return null;
}
function deleteDef(def_name) {
    fs.unlinkSync(DEFS_FOLDER + def_name )
    if (fs.existsSync(DEFS_FOLDER)) {
        if (fs.existsSync(DEFS_FOLDER + def_name )) {
            fs.unlinkSync(DEFS_FOLDER + def_name );
            return true;    
        }
    }
    return false;
}

app.get('/', (req, res) => {
    res.send('Hello!');
});
app.listen(port, () => {
    
    console.log('Example app listening on port ' + port);
});