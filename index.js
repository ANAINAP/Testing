const express = require('express')


const app = express(); 

app.get('/',(req, res)=>{ 
	res.send("Hello, Welcome to our Page"); 
} );



app.listen(4000, (error) =>{ 
	if(!error) 
		console.log("Server is Successfully Running , and App is listening on port "+ 4000) 
	else
		console.log("Error occurred, server can't start", error); 
	} 
); 
