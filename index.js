// Require moduels and setup
const express = require('express')
const app = express();
const port = 3000;
const home = require("./routes");

// Use of Express Router
app.use('/',home);

//set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err) console.log(`Error while starting server:${err}`);
    else console.log(`Server is running at Port:- ${port}`);
})

