const express = require( 'express' );
const app = express(); // creates an instance of an express application
//const morgan = require('morgan')

app.use(function(req,res,next){

	console.log("here "+req.method+" "+ req.path)
	next()

})
app.get('/',function(req,res){
	res.send("hello there")
})
app.get('/news',function(req,res){
	res.send("this is the news page")
})

var listener = app.listen(3000,function(){
	console.log("listening to port "+ listener.address().port)
} );


	

