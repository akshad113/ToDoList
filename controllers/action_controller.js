const db = require ('../config/mongoose');

const Task = require('../models/task')



module.exports.toDo = function(req,res){
    Task.create({
        description: req.body.description,
        category : req.body.category,
        date : req.body.date
    },function(err,newTask){
        if(err){
            console.log('error in creating a contact');
            return;
        }

        console.log("*********",newTask);
        return res.redirect('back');
    })
}



module.exports.delete = function(req,res){
    if(req.body.id == undefined){
        console.log("User haven't selected any task to delete");
        return res.redirect('back');
    }
    else if(typeof(req.body.id) == 'string'){
        Task.findByIdAndDelete(req.body.id,function(err){
            if(err){
                console.log('error in deleting task')
                return;
            }
            return res.redirect('back');
        });
    }
    else{
        for( let i of req.body.id){
            Task.findByIdAndDelete(i,function(err){
                if(err){
                    console.log("error while deleting mutilple id");
                    return;
                }
            })
        }
        return res.redirect('back');
    }
}