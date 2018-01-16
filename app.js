const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.get('/',function(req,res){
	res.send("hello there")
})


var listener = app.listen(3000,function(){
	console.log("listening to port "+ listener.address().port)
} );


	

