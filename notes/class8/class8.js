/*****************************************************************************/
/*****************************************************************************/
/************************ C L A S S  8  N O T E S ****************************/
/*****************************************************************************/
/*****************************************************************************/


let ob = {}
Object.prototype
ob.__proto__ === Object.prototype
Object.prototype.hello = function() {console.log('Hello World')}
ob.hello()


/* FUNCTIONS ARE OBJECTS******************************************************/

let f = function() {console.log('Hello world')}
f.g = function() {console.log('Goodbye world')}
f.__proto__ == Function.prototype
Function


/* CONSTRUCTORS **************************************************************/

// --> constructor functions are by convention capitalized 

let Person = function(name) {
    this.name = name
}
let p1 = new Person("person1")
let p2 = new Person("person2")
console.log(p1.name)
// p1.__proto__ === p2.__proto__ === Person.prototype
// ^^ inheritance relationship
Person.protoype.age = 15
console.log(p1.age)
Person.protoype.print = function() {
    console.log(this.name)
}
p2.print()


/* T H I S KEYWORD ***********************************************************/

// --> In methods and constructors, this refers to the object

// --> This can be set using the apply function
//      --> the apply function is defined in protoype of function

let me = {name: "me"}
p1.print.apply(me)


/* CLASSES *******************************************************************/

// --> Forgetting to call 'new' on a constructor function is dangerous
//      --> 'this' is no longer pointing to the new object 
//      --> but to the global environment

// --> New in JS

//class Cat {
//    constructor(name)
    
//}


/* STATIC METHODS ************************************************************/

//class Point {
//    constructor(x,y)
//    
//}


/* INHERITANCE ***************************************************************/

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a noise.');
    }
}
class Dog extends Animal {
    speak() {
        console.log(this.name + ' barks.');
    }
}
var d = new Dog('Mitzie');
d.speak(); 

// SUPER KEYWORD:


/* RECURSIVE  ****************************************************************/

let hanoi = function (disc, src, aux, dst) {
    if (disc > 0) {
        hanoi(disc - 1, src, dst, aux);
        console.log('Move disc ' + disc + ' from ' + src + ' to ' + dst);
        hanoi(disc - 1, aux, src, dst);
    }
}
hanoi(3, 'Src', 'Aux', 'Dst');

// EXCERCISE: write recursive factorial function: 
// pseudocode: factorial (5) = 5* factorial(4) ....

let factorial = function (num) {
    if (num >= 1) {
        return num * factorial(num - 1);
    } else {
        return 1;
    }
}

/* FUNCTIONAL PROGRAMMING ****************************************************/

// --> Imperative:

for (var i = 0; i < anArr.length; i++){
    newArr[i] = anArr[i]*i
}

// --> Functional:

newArr = anArr.map(function (val, ind) {
    return val*ind;
})

// EX
[1,2,3].map(function(n, i) {
    return n !== n
})

//or

[1,2,3].map(f)

// --> What does each piece of code?

/* CLOSURES  *****************************************************************/

function init() {
    let name = 'name'
    function displayName() {
        console.log(name)
    }
    displayName()
}
init();

//

function makeFunc() {
    let name = 'name'
    function displayName() {
        console.log(name)
    }
    return displayName;
}
let myFunc = makeFunc()
myFunc()

// --> Can the inner function access name?

/* MODULES = CLOSURES & ENCAPSULATION ****************************************/

let myObj = (function() {
    let privateProp1 = 1; 
    let privateProp2 = "test"
    let setPrivate1 = function(val1) {
        privateProp1 = val1
    }
    let compute = function() {
        return privateProp1 + privateProp2
    }
    return {compute: compute, setPrivate: setPrivate1}
}) () // <-- Important!!
typeof myObj
Object.keys(myObj) // ['compute', 'myObject']


/* CALLBACKS  ****************************************************************/

request = prepare_the_request();
repsonse = send_request_synchronously(request);
display(response)

// --> what is the problem with this code?

request = prepare_the_request();
send_request_synchronously(
    request, function (response) {
        display(response);
    });


/* USING FILES AND MODULES ***************************************************/

// test.js
let f1 = function() {
    console.log("message")
}
module.exports = {f1: f1}

//node
let test = require('./test')
test.f1()

/* EN  ****************************************************************/

