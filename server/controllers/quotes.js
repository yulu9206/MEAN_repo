var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');
mongoose.Promise = global.Promise;
module.exports = {
  show: function(req, res) {
    Quote.find({}, function(err, quotes) {
      res.render('main', {quotes: quotes});
    })
  },
  create: function(req, res) {
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    quote.save(function(err) {
      if(err){
        console.log("something went wrong");
      } else {
        res.redirect('/main');
      }
    })
  },
  newUser: function(req, res) {
    var user = new User({name: req.body.name});
    user.save(function(err) {
      if(err){
        console.log("something went wrong in creating new user in db");
      } else {
        res.redirect('/main');
      }
    })
  } 
}