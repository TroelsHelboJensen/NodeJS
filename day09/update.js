var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/store';

mongoClient.connect(url, function(err, db) {
	var products = db.collection('products');
	products.updateOne({make : "Burton Menswear London"}, {$set : {"details.length" : "Long"}});

	db.close();
});