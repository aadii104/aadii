var express = require('express');

var app = express();
app.set ('view engine','ejs');
var routes = require('./routes');
var path = require('path');
app.use(express.static(path.join(__dirname,'assets')));

app.get('/',routes.home);

app.get('*',routes.notFound);

app.get('/personality/:fighter_id?',routes.history_single);


app.listen(3000,function(){
  console.log("THE applicayion is running on local host :3000")
});
