var colors = require('colors');
var fs = require('fs');
var stream = fs.createWriteStream('./package.json');

var answers = {};

var questions = [
	'name', 
	'version',
	'description',
	'Entry point',
	'Author',
	'License'
];

function ask(i) {
	process.stdout.write(questions[i].green);
	process.stdout.write('  >  '.red);
}

process.stdin.on('data', function(data) {
	answers[questions[Object.keys(answers).length]] = data.toString().trim();
	if(Object.keys(answers).length < questions.length) {
		ask(Object.keys(answers).length);
	} else {
		process.exit();
	}
});

process.on('exit', function() {
	var jsonAnswers = JSON.stringify(answers, null, 4);
	stream.write(jsonAnswers);
	stream.close();
});

ask(0);