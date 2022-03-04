var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbg = db.db('employee-list');
    var myemployee = [{name: 'shankar', email: 'shankar@gmail.com', location: 'sivakasi'}, {name: 'vicky', email: 'vicky@gmail.com', location: 'erode'}, 
    {name: 'sathish', email: 'sathish@gmail.com', location: 'chennai'}, {name: 'logesh', email: 'logesh@gmail.com', location: 'nagalapuram'}, 
    {name: 'hemath', email: 'hemath@gmail.com', location: 'ranipet'}, {name: 'saran', email: 'saran@gmail.com', location: 'trichy'}, 
    {name: 'gokul', email: 'gokul@gmail.com', location: 'neiveli'}, {name: 'giri', email: 'giri@gmail.com', location: 'chennai'}]

    dbg.collection('freshers').insertMany(myemployee, function(err, result){
        if(err) throw err;
        console.log('database has been created');
        db.close();
    });
});
