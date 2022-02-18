// Import database model
const Task =require("../models/task")




const bodyParser = require('body-parser');
module.exports.home = function(req,res){
    
    Task.find({},function(err,tasks){
        if(err){
            console.log('Error in fetching tasks');
            return;
        }
        return res.render('home',{
            title:"TODO APP",
            todo_list:tasks,
        });
    })
};

