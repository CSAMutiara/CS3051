/*****************************************************************************/
/*****************************************************************************/
/************************ C L A S S  9  N O T E S ****************************/
/*****************************************************************************/
/*****************************************************************************/

/* CALLBACK FUNCTIONS ******************************************************/
var array1 = [1,2,3];
var array2 = [5,6,7,9];
var array3 = [1,3,5,7,9,11,13,15]

let myfun = function() {
    var array = [1,2,3];
    for (var i = 0; i < array.length; i++) {
        var current = array[i]
        console.log(current);
    }
} // issue since array is defined in method, you'd need a new method for
// each array you want to alter

let myfun2 = function(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
} //pass array as argument... "abstract over the array"

// try out the new method

// what if we want to abstract over what happen to the array?
let myfun3 = function(array, f) {
    for (var i = 0; i < array.length; i++) {
        f(array[i]);
    }
}

/* JS ARRAY PROTOTYPE MDN **********************************************/

// .find(x)
// [1,2,3,4].find(x => x>2) * => defines criteria
// will return 3 because that is the first element that fits criteria

// .filter(x)
// [1,2,3,4].filter(x => x<3) 
// will return [1,2] because they are all the elements that fit criteria

// .forEach(x)
// try to write a function that executes the same as myfun3
// [1,2,3,4].forEach(x => console.log(x));
// will return:
// 1
// 2
// 3
// 4

// write an array that will concact an array of arrays into one array
// let myfun4 = function(arr) {
//   var sum = 0;
//   arr.forEach(x => sum = sum + x);
//   console.log(sum); 
// }

//or

// let f = fucntion(arr) {
//    let sum = 0;
//    for (let i = 0; i < arr.length; i++) {
//       sum = sum + arr[i];
//    }
//    return sum;
// }

//to concat arrays:
// let arrsum = function(arr) {
//   let acc = []
//   for (let i = 0; i<arr.length;i++) { 
//      acc = acc.concat(arr[i])
//   }
// }

// arrsum([[1,2],[3,4,5],[6]]);
// will return: [ 1, 2, 3, 4, 5, 6 ]

//or

// var concarr = function (arr) {
//   let acc = []
//   arr.forEach(x => acc = acc.concat(x))
//   console.log(acc)
// }

// concarr([[1,2],[3,4,5],[6]]);
// will return: [ 1, 2, 3, 4, 5, 6 ]


/* CONSTRUCTORS **************************************************************/

// --> constructor functions are by convention capitalized 
