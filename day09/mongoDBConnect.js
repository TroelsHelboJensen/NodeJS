var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/store';

mongoClient.connect(url, function(err, db) {
	console.log("Connected on port 27017, with this Object : " + db);

	db.close();	
});