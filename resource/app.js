const app = require('express')();
const bodyParser = require('body-parser');

app.listen(3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
console.log('Server started: http://localhost:3000');

const w=require('weaveworld');
w.dir=__dirname+'/public';
app.all('/*',w.route);    


w.op('hello').then((o)=>({message:'Hello '+(o.name||'World')+'!'}));

/*
const mysql = require('mysql'), connection = mysql.createConnection({
  host:'localhost', database:'xyz', user:'root', password:'',
})
w.connection=connection;
w.sqlLog=console.log;

w.op('eachX').sql("SELECT * FROM x");
w.op('getX').then(o=>[o.id]).sql("SELECT * FROM x WHERE id=?").then(o=>o.length?o[0]:{});
w.op('setX').then(o=>[o.f1,o.f2,o.id]).sql("UPDATE x SET f1=?,f2=? WHERE id=?");
w.op('addX').sql("INSERT INTO x SET ?").then(o=>{id:o.insertId});
*/

