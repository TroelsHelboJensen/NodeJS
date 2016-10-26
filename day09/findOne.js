var mongoClient = require('mongodb').MongoClient;

// To search for the ObjectId i need to require the mongodb.ObjectId
var ObjectId = require('mongodb').ObjectID;

var url = 'mongodb://localhost:27017/store';
// Connecting to the database
mongoClient.connect(url, function(err, db) {
	// the use command to get the collection
	var users = db.collection('users');
	users.findOne({"_id": ObjectId("580f709fab50598b383e723d")}, function(err, item) {
		console.log(item);		
		db.close();
	});
});