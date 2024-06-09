//_______ Nested Array _________

const hobies = new Array("Getup early","Play game","JOyfull" ,"Happy")
//let friends = ["SAQIB","Rashid","Noman","Ali" , ["Getup Early" ,'Joyfull' , 'GamePlay']]
const friends = ["Shazad","NOman","Huzafaa" , hobies]

console.log(friends[friends.length-1])
console.log(friends[friends.length-1][0])
console.log(friends[friends.length-1][1])
console.log(friends[friends.length-1][2])
console.log(friends[friends.length-1][3])



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
