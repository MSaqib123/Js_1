//_______ Nested Array _________

const hobies = new Array("Getup early","Play game","JOyfull" ,"Happy")
//let friends = ["SAQIB","Rashid","Noman","Ali" , ["Getup Early" ,'Joyfull' , 'GamePlay']]
const friends = ["Shazad","NOman","Huzafaa" , hobies]

//==== Get habites for there friends =======
//get the hobis of all friend with ther name
console.log(friends[0] , friends[friends.length-1])
console.log(friends[1] ,",", friends[friends.length-1][0])
console.log(friends[2] ,",", friends[friends.length-1][1])
console.log(friends[3] ,",", friends[friends.length-1][2])
console.log(friends[4] ,",", friends[friends.length-1][3])



//______ Array with function (expresion function) __________
const calcAge = function(birthYear){
    return 2023 - birthYear
}
const year = [1990,2000,2005,2010]

// const ag1 = calcAge(calcAge(year[0]))
// const ag2 = calcAge(calcAge(year[1]))
// const ag3 = calcAge(calcAge(year[2]))

//store in array 
const ages = [calcAge(year[0]),calcAge(year[1]),calcAge(year[2])]

//____  Last Element of Nested Element ____
var student = new Array("SAQIB",25,'9th','2001-2-10',["Saqjid",'Aq',["India","Pakistan"]])
console.log(student.length)
console.log("Last Element : ", student[student.length-1])
console.log("Last Element in Last : ", student[student.length-1][student[student.length-1].length-1])
console.log("Last Element in last in last : ", student[student.length-1][student[student.length-1].length-1][student[student.length-1][student[student.length-1].length-1].length-1])




//=========== Array with Function (expression function) ==========
const anemes =  new Array("India","Americal","Israil");
const remainingyearToBeExistince =  [2040,2050,2035];
const contries = [anemes,remainingyearToBeExistince] //anemes , remaing are child  
console.log("Contries",contries)

//function that calculate remaining year of Contries befor dayes

function calcRemainingYears(countryName,finalYear){
    let remainingYear =  finalYear-2025 //2040-2025 //15
    return `this Country : ${countryName} has only ${finalYear} this much time left befor Daying`
}
// console.log(calcRemainingYears(contries[0][0],contries[1][0]))
// console.log(calcRemainingYears(contries[0][1],contries[1][1]))
// console.log(calcRemainingYears(contries[0][2],contries[1][2]))
let year1 = calcRemainingYears(contries[0][0],contries[1][0])
let year2 = calcRemainingYears(contries[0][1],contries[1][1])
let year3 = calcRemainingYears(contries[0][2],contries[1][2])

var endYears = [year1,year2,year3]

