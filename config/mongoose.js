//require the library
const mongoose = require("mongoose")


//connect to the database
mongoose.connect('mongodb://localhost/toDo_list_db');

//acquire the connection (to check if it is successful)
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

// up and running the server
db.once('open',function(){
    console.log('successfully connected to the database');
})