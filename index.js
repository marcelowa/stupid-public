var express = require('express');
var app = express();
function logger(req,res,next){
  console.log(new Date(), req.method, req.url);
  next();
}
app.use(logger);

app.use('/public', express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
