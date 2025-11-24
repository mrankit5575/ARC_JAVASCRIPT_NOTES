// let a = [1, 'ankit', true, null, undefined,]

// console.log(a[2]);
//inside we add mutliple value any datatype
//  const fruits = [1 , 2, 'ankit'];
//push 
//shift
//pop
//unshift
//length
//indexof //important
//map  //important 
//filter  //important
//reduce 
//sort //important
//slice  //important
//splice 

const fruits = [1, 2, 'ankit', true];

// fruits.push('singh') // las/t value add krta hai 
// fruits.pop() // last value remove krta hai 
// fruits.shift() // first value remove krta hai 
// fruits.unshift('singh') // first value add krta hai 
// fruits.length // length of array 
;

//  slice example 

const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]


//slice example 
// let slice = [1,2,3,'komal' , 'singh']
// slice.slice(2,4)
// // starting krega 2 se and include hoga  but end value print nhi hogi
// console.log(slice);

//split example
// let split = 'ankit singh'
// split.split(' ')   // sperated by space 
// console.log(split);

// /splice example 
let a = ['ankit', 'singh', 'true', 'anjali', 'komal'];
a.splice(2, 2, 'komal');
console.log(a);
