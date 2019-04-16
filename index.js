const fs=require('fs');
const path=require('path');

var dir=path.resolve(process.argv[2]||process.cwd())

console.log("DIR",dir);

var pckg={
  "name": path.basename(dir),
  "version": "1.0.0",
  "description": "Web application w Weaveworld",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "keywords": [
    "WebDevelopment", "Weaveworld"
  ],
  "dependencies": {
    "weaveworld": "^"+module.version
  },  
  "author": "",
}

var f,dirP;

if (!fs.existsSync(dir)){ fs.mkdirSync(dir); }
if (!fs.existsSync(dirP=path.resolve(dir,'public'))){ fs.mkdirSync(dirP); }

fs.writeFileSync(path.resolve(dir,f='package.json'), JSON.stringify(pckg));
fs.writeFileSync(path.resolve(dir,f='app.js'), fs.readFileSync(__dirname+'/resource/'+f));
fs.writeFileSync(path.resolve(dirP,f='index.html'), fs.readFileSync(__dirname+'/resource/'+f));
fs.writeFileSync(path.resolve(dirP,f='index.js'), fs.readFileSync(__dirname+'/resource/'+f));
