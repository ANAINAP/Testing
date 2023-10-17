const express = require('express')
require('dotenv').config()


const app = express(); 

app.get('/api/user',(req, res)=>{ 
	res.send("Hello, Welcome to our Page"); 
} );

app.get('/api/new',(req, res)=>{ 
	res.send("new one"); 
} );




app.listen(4000 ,(error) =>{ 
	if(!error) 
		console.log("Server is Successfully Running , and App is listening on port "+ 4000) 
	else
		console.log("Error occurred, server can't start", error); 
	} 
); 
