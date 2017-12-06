var express = require('express');
var app = express();

// base route response
app.get('/', function(req,res){
    res.send('Hello world!');
});

app.listen(3000, function(){
    console.log('listening on port 3000');
})