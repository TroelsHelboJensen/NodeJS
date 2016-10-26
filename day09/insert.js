var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/store';

mongoClient.connect(url, function(err, db) {
	var users = db.collection('users');

	users.insert({"name" : "Kristina"}, function(err, item) {
		console.log(item);
		users.find({}).toArray(function(err, data) {
			console.log(data);
			db.close();
		});
	});
});