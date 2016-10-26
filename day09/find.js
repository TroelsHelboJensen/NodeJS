var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/store';
// Connecting to the database
mongoClient.connect(url, function(err, db) {
	// the use command to get the collection
	var user = db.collection('users');
	// Find() option from mongodb
	user.find({}).toArray(function(err, data) {
		console.log("I just found everything in the Store collection Database");
		// All data from the db.users.find()
		console.log(data);
	});

	db.close();	
});