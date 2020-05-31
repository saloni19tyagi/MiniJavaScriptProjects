// A simple Function
let add = function(a, b) {
    return (a+b) ;
}

//Function call
console.log(add(1, 2)) ;

//A simple Constructor (generally used to initialize the properties of an object)
let Car = function(color) {
    this.color = color ; // this keyword will set the color of the current object created
}

let carObj = new Car('red') ; // created an object and initialised the color property
console.log(carObj);
console.log(carObj.color) ;

let carObj1 = Car('blue'); // calling without new keyword, constructor act as a funtion
// and since it does not return anything, the output is undefined. 
// also, when we call constructor without new keyword, and this in constructor refers to window 
// and thus set the global property( to avoid this, we use 'use strict')


// Adding Methods to Constructors

let Shape = function(color) {
    this.color = color 
    let getColor = function() {  // one way to define a method inside a constructor
        return this.color ;
    }
}

Shape.prototype.getColor = function() { // second way to define a method is using prototype
    return this.color ;
} 

Shape.prototype = { 
    getColor() { // second way to define a method is using prototype(different syntex)
    return this.color ;
    }
} ;

let shapeObj = new Shape('pink') ;
console.log(shapeObj.getColor()) ;

let square = function() { // Empty Constructor
    
}; 

// setting the properties of shape to square constructor
square.prototype = Object.create(Shape.prototype) // set reference for
// square proto to shape proto

//Object.create helps to extend a constructor (set the prototype reference)

let squareObj = new square() ;
console.log(squareObj);
console.log(squareObj instanceof square) ; // return true
console.log(squareObj instanceof Shape) ; // return true
console.log(shapeObj instanceof square) ; // return false 

console.log(square.prototype.isPrototypeOf(squareObj)) // return true (square prototype is the prototype of shape)