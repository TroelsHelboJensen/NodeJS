var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/store';

mongoClient.connect(url, function(err, db) {
	var users = db.collection('users');

	users.deleteOne({name: "Kristina"}, function(err, result) {
		console.log(result);
		db.close();
	});
});