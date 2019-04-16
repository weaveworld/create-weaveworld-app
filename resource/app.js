const app = require('express')();
const bodyParser = require('body-parser');

app.listen(3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
console.log('API server started');

const weaveworld=require('weaveworld');
weaveworld.dir=__dirname+'/public';
app.all('/*',weaveworld.route);    

/*
weaveworld.op('hello').then((o)=>({message:'Hello '+(o.name||'World')+'!'}));
*/


/*
const mysql = require('mysql'), connection = mysql.createConnection({
  host:'localhost', database:'xyz', user:'root', password:'',
})
weaveworld.connection=connection;
weaveworld.sqlLog=console.log;

weaveworld.op('eachX').sql("SELECT * FROM x");
weaveworld.op('getX').then(o=>[o.id]).sql("SELECT * FROM x WHERE id=?").then(o=>o.length?o[0]:{});
weaveworld.op('setX').then(o=>[o.f1,o.f2,o.id]).sql("UPDATE x SET f1=?,f2=? WHERE id=?");
weaveworld.op('addX').sql("INSERT INTO x SET ?").then(o=>{id:o.insertId});
*/

