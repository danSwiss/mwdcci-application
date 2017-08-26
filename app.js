//this pulls in the express package
var express = require('express');
//So app is an instance of express as the WEb Development Framework
var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));
//app.set('views', './src/views');

//var handlebars = require('express-handlebars');

//app.engine('.hbs', handlebars({extname:'.hbs'}));


//app.set('view engine', '.hbs');
//app.set('view engine', 'jade');

//app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    //res.send('Hello world');
    res.render('index', {title: 'Hello from title', list: ['a', 'b']});
});

app.get('/books', function (req, res) {
    res.send('hello books');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});
