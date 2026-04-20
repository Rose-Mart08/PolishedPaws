/* Samir Sultanov - Team 6 Node server port 3006 */
var express    = require("express");
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Samir Sultanov - allow cross-origin requests */
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

/* Samir Sultanov - test route */
app.get('/', function(req, res) {
    res.send('Polished Paws Node Server - Team 6 - Running on port 3006');
});

/* Samir Sultanov - receive shopper JSON */
app.post("/shopper", bodyParser.json(), function(req, res) {
    console.log("Shopper Post");
    try {
        var MongoClient = require('mongodb').MongoClient;
        var doc = req.body;
        MongoClient.connect('mongodb://localhost:27017', function(err, client) {
            if (err) return res.send({ "result": "failed" });
            client.db('team06').collection('shopper').insertOne(doc, function() { client.close(); });
            return res.send({ "result": "passed" });
        });
    } catch (e) { console.error(e); }
});

/* Samir Sultanov - receive product JSON */
app.post("/product", bodyParser.json(), function(req, res) {
    console.log("Product Post");
    try {
        var MongoClient = require('mongodb').MongoClient;
        var doc = req.body;
        MongoClient.connect('mongodb://localhost:27017', function(err, client) {
            if (err) return res.send({ "result": "failed" });
            client.db('team06').collection('product').insertOne(doc, function() { client.close(); });
            return res.send({ "result": "passed" });
        });
    } catch (e) { console.error(e); }
});

/* Samir Sultanov - receive shopping cart JSON */
app.post("/shoppingcart", bodyParser.json(), function(req, res) {
    console.log("Shopping Cart Post");
    try {
        var MongoClient = require('mongodb').MongoClient;
        var doc = req.body;
        MongoClient.connect('mongodb://localhost:27017', function(err, client) {
            if (err) return res.send({ "result": "failed" });
            client.db('team06').collection('shoppingcart').insertOne(doc, function() { client.close(); });
            return res.send({ "result": "passed" });
        });
    } catch (e) { console.error(e); }
});

/* Samir Sultanov - receive shipping JSON */
app.post("/shipping", bodyParser.json(), function(req, res) {
    console.log("Shipping Post");
    try {
        var MongoClient = require('mongodb').MongoClient;
        var doc = req.body;
        MongoClient.connect('mongodb://localhost:27017', function(err, client) {
            if (err) return res.send({ "result": "failed" });
            client.db('team06').collection('shipping').insertOne(doc, function() { client.close(); });
            return res.send({ "result": "passed" });
        });
    } catch (e) { console.error(e); }
});

/* Samir Sultanov - receive billing JSON */
app.post("/billing", bodyParser.json(), function(req, res) {
    console.log("Billing Post");
    try {
        var MongoClient = require('mongodb').MongoClient;
        var doc = req.body;
        MongoClient.connect('mongodb://localhost:27017', function(err, client) {
            if (err) return res.send({ "result": "failed" });
            client.db('team06').collection('billing').insertOne(doc, function() { client.close(); });
            return res.send({ "result": "passed" });
        });
    } catch (e) { console.error(e); }
});

/* Samir Sultanov - receive returns JSON */
app.post("/returns", bodyParser.json(), function(req, res) {
    console.log("Returns Post");
    try {
        var MongoClient = require('mongodb').MongoClient;
        var doc = req.body;
        MongoClient.connect('mongodb://localhost:27017', function(err, client) {
            if (err) return res.send({ "result": "failed" });
            client.db('team06').collection('returns').insertOne(doc, function() { client.close(); });
            return res.send({ "result": "passed" });
        });
    } catch (e) { console.error(e); }
});

/* Samir Sultanov - start server on port 3006 */
try {
    var server = app.listen(3006, function() {
        console.log("Polished Paws Team 6 listening on port %s...", server.address().port);
    });
} catch (e) { console.error(e); }
