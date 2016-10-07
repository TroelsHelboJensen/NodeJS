// creating an object
var obj = {};

// Objects can have properties written in key value pairs
// Like HashMap in Java
var car = {
	brand : 'BMW',
	xx : 'ccc',
	ss : function () { 
		return this.brand;
	},
	aa : {
		ee: 'gfgfgf',
		ggg : 'hhhh'
	},
	ggg : [2,4,6,7]
}

// you access an object and it´s propeties like:
console.log(car.brand);
console.log(car.ss());
console.log(car.aa.ee);
console.log(car.ggg[2]);

// or like this with an expression
console.log(car['brand']);
console.log(car['bra' + 'nd']); // :)

// and you can set the value of the properties like this
car.brand = 'Ford';
car.xx['mean'];

// or create a new like this
car.color = 'Red';
car['doors' + 1] = 4;
console.log(car);

// you can create private fields like this:
var hotel = {
	customers : (function () {
		var privateVar = 10;
		return {
			getPrivateVar : function () {
				return privateVar;
			},
			setPrivateVar : function (x) {
				privateVar = x;
			}
		};

	})()
};

console.log(hotel.customers.getPrivateVar());
hotel.customers.setPrivateVar(100);
console.log(hotel.customers.getPrivateVar());









