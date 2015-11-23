var http = require('http');
var dispatcher = require('httpdispatcher');
var server = http.createServer(handleRequest);
var io = require('socket.io').listen(server);
var handlebars = require("handlebars");
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog');


const PORT=8080;
var News = mongoose.model('News', {url: String, text: String});


server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});


function handleRequest(request, response){
    try {
        console.log(request.url);
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

/**
 * Chat
 */

dispatcher.onGet("/chat", function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./html/chat.html', 'utf8', function (err,data) {
        res.end(data);
    });
});

io.sockets.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});

/**
 * Index page
 */
dispatcher.onGet("/", function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./html/index.html', 'utf8', function (err,data) {
        res.end(data);
    });
});

/**
 * About page
 */

dispatcher.onGet("/about", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./html/about.html', 'utf8', function (err,data) {
        res.end(data);
    });
});

/**
 * Blog
 */

dispatcher.onGet("/new", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./html/new.html', 'utf8', function (err,data) {
        res.end(data);
    });
});



dispatcher.onPost("/new", function(req, res) {

    console.log(req.body.valueOf('newsText'));
    console.log(req.body);

    var url = req.body.newsUrl;
    var text = req.body.newsText;

    var news = new News({url: url, text: text});
    news.save(function (err, news) {
        if (err) {
            console.log(err);
        } else {
            console.log('saved successfully:', news);
        }
    });
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./html/new.html', 'utf8', function (err,data) {
        res.end(data);
    });
});

dispatcher.onGet("/blog", function(req, res) {

    var newsList = {};
    News.find(function(err, news) {
        newsList = news;
    });

    var template = fs.readFileSync("./html/blog.html", "utf8");
    var pageBuilder = handlebars.compile(template);
    var pageText = pageBuilder({newsList: newsList});
    res.writeHead(200, {"Context-Type": "text/html"});
    res.write(pageText);
    res.end();
});



