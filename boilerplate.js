//import fs from 'fs';
const fs = require('fs');
const foldername = process.argv[2] || 'Project'


try{
    fs.mkdirSync(foldername);
    fs.writeFileSync(`${foldername}\\index.html`, '');
    fs.writeFileSync(`${foldername}\\app.js`, '');
    fs.writeFileSync(`${foldername}\\style.css`, '');
}
catch(e){
    console.log("Ooopps! Error: ", e);
}

