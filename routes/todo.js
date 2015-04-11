var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
    name: String,
    due_date: Date,
    timestamp: {
        type: Date,
        default: Date.now
    },
    description: String,
    priority: Number,
    complete: Boolean,
})

var Todo = mongoose.model('Todo', todoSchema);

router.get('/', function(req, res, next) {
    return Todo.find(function(err, names) {
        if (!err){
            res.render('todo', {
                greeting: "Task Saved!",
                names: names
            });

            console.log(names);
        } else {
            return console.log(err);
        }
    });
});

router.post('/', function(req, res) {
new Todo({
    due_date: req.body.due_date,
    name: req.body.name,
    description: req.body.description,
    priority: req.body.priority
        //complete: false
}).save(function(err, name) {
    if (err) {
        return console.error(err);
    }
    console.log(name);
});

res.redirect('todo');
});
module.exports = router;
