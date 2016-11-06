var historyJSON = require('../history.json');



exports.home = function(req,res){
  var history = historyJSON.history;
  res.render('home',{
  title: "Freedom Fighter Blog",
  history : history
   });
};

exports.history_single = function(req,res){
  var fighter_id = req.params.fighter_id;
  var history = historyJSON.history;
  res.render('history_single',{
         history : history
  });
};
exports.notFound = function(req,res){

  res.send("this is not what  page u r finding")
};
