var express = require('express');
var app = express();

//
app.use(express.static(__dirname+'/app'));
app.use('/npm-libs',express.static(__dirname+'/node_modules'))

//
var port = 3010;
app.listen(port,function(){
	console.log('Server Started on port: '+port);
})