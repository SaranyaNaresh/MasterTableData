//mongodb commands: http://howtonode.org/node-js-and-mongodb-getting-started-with-mongojs
//http://docs.mongodb.org/manual/reference/mongo-shell/

/*var databaseURI = "localhost:27017/somedb";
var collections = ["users", "blogs"];
var db = require("mongojs").connect(databaseURI, collections);

module.exports = db;

and then just require it where you need to connect to mongo like:

var db = require("./db");
*/


var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('admin:admin@ds145289.mlab.com:45289/sampledb', ['status','accountTypes','sectors','tasks']);


var bodyParser = require('body-parser');

app.use(express.static(__dirname));
//app.use(express.static(__dirname + "/index.html"));
//app.use(express.static(__dirname + "./views"));
app.use(bodyParser.json());

app.get('/types', function(req, res){
    console.log('Received find all accountTypes request');
    db.accountTypes.find(function(err, docs){
        console.log(docs);
        res.json(docs);
    })
});

app.get('/type/:id', function(req, res){
    console.log('Received findOne accountType request');
    db.accountTypes.findOne({_id: new mongojs.ObjectId(req.params.id)}, function(err, docs){
        console.log(docs);
        res.json(docs);
    })
});

app.post('/addType', function(req, res){
    console.log(req.body);
    db.accountTypes.insert(req.body, function(docs){
        console.log(docs);
        res.json(docs);
    })
});

app.delete('/deleteType/:id', function(req, res){
    console.log("Received delete one accounttype request...");
    db.accountTypes.remove({_id: new mongojs.ObjectId(req.params.id)}, function(err, docs){
        console.log(docs);
        res.json(docs);
    });
});

app.put('/updateType', function(req, res){
    console.log("Received updateAccountType request");
    db.accountTypes.findAndModify({query: {"_id": new mongojs.ObjectId(req.body._id)},
        update: {$set: {name: req.body.name}}
    }, function(err, docs){
        console.log(docs);
        res.json(docs);
    })
});

app.get('/sectors', function(req, res){
    console.log('Received find all persons request');
    db.sectors.find(function(err, docs){
        console.log(docs);
        res.json(docs);
    })
});

app.get('/sector/:id', function(req, res){
    console.log('Received findOne person request');
    db.sectors.findOne({_id: new mongojs.ObjectId(req.params.id)}, function(err, docs){
        console.log(docs);
        res.json(docs);
    })
});

app.post('/addSector', function(req, res){
    console.log(req.body);
    db.sectors.insert(req.body, function(docs){
        console.log(docs);
        res.json(docs);
    })
});

app.delete('/deleteSector/:id', function(req, res){
    console.log("Received delete one person request...");
    db.sectors.remove({_id: new mongojs.ObjectId(req.params.id)}, function(err, docs){
        console.log(docs);
        res.json(docs);
    });
});

app.put('/updateSector', function(req, res){
    console.log("Received update sector request");
    db.sectors.findAndModify({query: {"_id": new mongojs.ObjectId(req.body._id)},
        update: {$set: {name: req.body.name}}
    }, function(err, docs){
        console.log(docs);
        res.json(docs);
    })
});

app.get('/tasks', function(req, res){
    console.log('Received find all tasks request');
    db.tasks.find(function(err, docs){
        console.log(docs);
        res.json(docs);
    })
});

app.get('/task/:id', function(req, res){
    console.log('Received findOne task request');
    db.tasks.findOne({_id: new mongojs.ObjectId(req.params.id)}, function(err, docs){
        console.log(docs);
        res.json(docs);
    })
});

app.post('/addTask', function(req, res){
    console.log(req.body);
    db.tasks.insert(req.body, function(docs){
        console.log(docs);
        res.json(docs);
    })
});

app.delete('/deleteTask/:id', function(req, res){
    console.log("Received delete one task request...");
    db.tasks.remove({_id: new mongojs.ObjectId(req.params.id)}, function(err, docs){
        console.log(docs);
        res.json(docs);
    });
});

app.put('/updateTask', function(req, res){
    console.log("Received updateTask request");
    db.tasks.findAndModify({query: {"_id": new mongojs.ObjectId(req.body._id)},
        update: {$set: {rate: req.body.rate, type: req.body.type}}
    }, function(err, docs){
        console.log(docs);
        res.json(docs);
    })
});
app.get('/status', function(req, res){
    console.log('Received find all status request');
    db.status.find(function(err, docs){
        console.log(docs);
        res.json(docs);
    })
});

app.get('/status/:id', function(req, res){
    console.log('Received findOne status request');
    db.status.findOne({_id: new mongojs.ObjectId(req.params.id)}, function(err, docs){
        console.log(docs);
        res.json(docs);
    })
});

app.post('/addStatus', function(req, res){
    console.log(req.body);
    db.status.insert(req.body, function(docs){
        console.log(docs);
        res.json(docs);
    })
});

app.delete('/deleteStatus/:id', function(req, res){
    console.log("Received delete one status request...");
    db.status.remove({_id: new mongojs.ObjectId(req.params.id)}, function(err, docs){
        console.log(docs);
        res.json(docs);
    });
});

app.put('/updateStatus', function(req, res){
    console.log("Received updateStatus request");
    db.status.findAndModify({query: {"_id": new mongojs.ObjectId(req.body._id)},
        update: {$set: {name: req.body.name}}
    }, function(err, docs){
        console.log(docs);
        res.json(docs);
    })
});


//app.use(express.static(__dirname + "/app/views"));
app.listen(3000);
console.log("server running on port 3000");