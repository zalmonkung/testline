const https = require("https");
var app = require('express')();
var port = process.env.PORT || 7777;
var bodyParser = require('body-parser');
const token = 'vYCuxuwZdwl6loW81W95JyLcWbm12XjcxaO1Kkw4JcD';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

function sendLine(msg){
  const request = require('request');
   request({
     method: 'POST',
     uri: 'https://notify-api.line.me/api/notify',
     headers: {
       'Content-Type': 'application/x-www-form-urlencoded',
  },
     'auth': {
       'bearer': token
  },form: {
       message: msg,
    }
  }, (err,httpResponse,body) => {
     //console.log(JSON.stringify(err));
     //console.log(JSON.stringify(httpResponse));
     //console.log(JSON.stringify(body));
  });


   console.log("sendLine : "+msg);
}

app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});

app.get('/index', function (req, res) {
    res.send('<h1>This is index page</h1>');
});

app.get('/line/:msg', function (req, res) {
	var m = req.params.msg;
	sendLine(m);
    res.send('<h1>sendline : '+m+'</h1>');
});

/*
app.post('/newuser', function (req, res) {
    var json = req.body;
    res.send('Add new ' + json.name + ' Completed!');
});*/

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});