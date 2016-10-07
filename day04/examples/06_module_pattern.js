// an IIFE that returns an Object with 3 properties

var counter = (function() {
  var privateCounter = 0; // private
  
  // private
  function changeBy(val) {
    privateCounter += val;
  }
 
  // return an object with properties (public)
  return { 
    increment: function() {
      changeBy(arguments[0] || 1);
    },
    decrement: function() {
      changeBy(-1);   
    },
    value: function() {
      return privateCounter;
    }
  };   
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1