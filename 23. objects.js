//___________________ Array ______________________
const studentArray=[
    true, //active or not
    //'Saqib', //fname
    'Ali', //lname
    2023-1997, //age
    'teacher', //job
    ['Michael','Peter','Steven'] //friends
]
// 1. Array  always work on Orders , Position
// 2. ----> Issue <---- we can not  give name to  Properties of array 
    //which is very dificlat to work with array
var fName = studentArray[0]  // how do we know that   at 0 positiion there is  Name ?????


//___________________ Object ______________________
//to Over come the issue of   getting element by its  name  we use  Object
const developer = {
    firstName:'Saqib',
    lastName : 'Ali',
    age : 2023 - 1996,
    jobs : 'developer',
    friends:['Michael','Peter','Steven']
}

var objFname = developer.fName;
var objLname = developer.lastName;
console.log(objFname,objLname)