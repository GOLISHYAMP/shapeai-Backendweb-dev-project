const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function (req,res) {
res.sendFile(__dirname+"/index.html");
})



app.post("/",function(req, res){
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  res.send("the answer is "+ String(n1+n2));
})
/*
app.get("/about",function (req,res) {
res.send('<h2>Shyam Goli</h2><p>You have visited the about page</p>')
})

app.get("/shapeai",function (req,res) {
res.send('<h4>SHAPEAI!<h4>')
})*/

app.listen(3000,function(){
  console.log('Server is started on local host');
});
