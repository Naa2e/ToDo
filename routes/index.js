var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
    // yay!
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dance is Life',
  		header: 'MCDA',
  		body: 'Music City Dance Alliance',
   });
});

module.exports = router;
