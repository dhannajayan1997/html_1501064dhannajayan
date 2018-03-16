var express = require('express')
var path =require('path');
var app = express()
app.use(express.static(__dirname))
app.use('/html', express.static(path.join(__dirname, 'html')))

console.log(__dirname);
 
app.get('/html', function (req, res) {
	var symblos=["hp"IBM"];
  res.end('json,stringify(symbols'));

});
app.get("/html",function(req,res){
	var params=require("url").parse(rquest.url,true).query;
	var country = parse.country;
	console.log(country)
 
app.listen(3000)
console.log("server of dhanajayan started");