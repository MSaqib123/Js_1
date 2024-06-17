//_________________ Falsy Values ___________
//in Js ther are  5 value  are falsy

//______ 1. (0) _______
// 0
console.log(Boolean(0))

let money = 100; //true     //0; //false
if(money){
    console.log("please don't speend all mony")
}
else{
    console.log("YOu should get job")
}



//______ 2. ('') _______
// ''
console.log(Boolean(''))

//______ 3. (undefined) _______
//undefined
console.log(Boolean(undefined))

let height;
if(height){
    console.log("value is defined")
}
else{
    console.log("value is Undefined")
}

//______ 4. (null) _______
//null
console.log(Boolean(null))

//______ 5. (NaN) _______
//NaN   not a number
console.log(Boolean(NaN))


//_________________ truthy Values ___________
// true , value , 'string'   , {} 
