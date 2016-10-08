var person = {
	name : "something",
	age : "1",
	gender : "Mammel"
}

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.gender);

person.name = "Troels";
person.age = "1";
person.gender = "FeMammel";

console.log(person);

// Animal with private fields
var animal = {
	name : (function(){
		var privName = "abe";
		return {
			getName : function() {
				return privName;
			},
			setName : function(newName) {
				privName = newName;
			}
		};
	})()
};

console.log(animal.name.getName());