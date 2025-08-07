//___________ 1. ES-6  feature _________________

//--- let ---
let latVariable = 234;
console.log(6)

//--- cosnt ---
const fiexedValueVar = 44;
console.log(fiexedValueVar);

//fiexedValueVar = 4;   error  const  variable can not  reassign


//___________ 2. ES-5 _________________ 
var anyDatatypeVariable = 'Pakista'
console.log(anyDatatypeVariable)

var anyDatatypeVariable = true
console.log(anyDatatypeVariable)

var anyDatatypeVariable = 234
console.log(anyDatatypeVariable)



//___________ 3. Diff  let / var _________________
//___ var ___
//1. Runtime Error    (var dose not give runtime error)
var x = 234;
var x = "234324324";
//2. functional scope hotaa
//3. not Hoisting  (without declare  give undfined )
console.log(s);
var s = "boti ni ho rhi"


//___ let ___
//1. Runtime Error    (let give runtime error)
// let y = 34234234;
// let y = "sfasdf";

//2. Block Scope hotaa
//3. Hoisting  (without declare  give error )

console.log(wife);
let wife = "boti ni ho rhi"