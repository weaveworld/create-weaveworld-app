const fs=require('fs');
const path=require('path');
var packageInfo = require('./package.json');
const execSync = require('child_process').execSync;

var dir=path.resolve(process.argv[2]||process.cwd())
//console.log("DIR",dir, process.argv);

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
    "weaveworld": "^"+packageInfo.version
  },  
  "author": "",
}

var f,dirP;

if (!fs.existsSync(dir)){ fs.mkdirSync(dir); }
if (!fs.existsSync(dirP=path.resolve(dir,'public'))){ fs.mkdirSync(dirP); }

fs.writeFileSync(path.resolve(dir,f='package.json'), JSON.stringify(pckg));
fs.writeFileSync(path.resolve(dir,f='app.js'), fs.readFileSync(__dirname+'/resource/'+f));
fs.writeFileSync(path.resolve(dirP,f='index.html'), fs.readFileSync(__dirname+'/resource/public/'+f));
fs.writeFileSync(path.resolve(dirP,f='index.js'), fs.readFileSync(__dirname+'/resource/public/'+f));

execSync('npm install',{cwd:dir}),

console.log('Weaveworld app created in '+dir);
console.log('Usage:');
console.log(' cd '+dir)
console.log(' node app.js');
console.log('And open http://localhost:3000');
