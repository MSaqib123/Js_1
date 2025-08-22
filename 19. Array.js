const friend1 = "Saqib"
const friend2 = "Noman"
const friend3 = "Ali"

//______________ Array 1 __________________
//to store multiple values in  single  variable
const friends = ["Shazad","Noman","Huzafaa"]

//print array
console.log(friends)
//print single Values
console.log(friends[0])
console.log(friends[1])
console.log(friends[2])

//______________ Array 2 __________________
const years = new Array(1991,1984,2008,2020);
console.log(years[0])
console.log(years[1])
console.log(years[2])

//______________ Array length __________________
console.log(years.length)

//______________ Array last element position __________________
//poisiton hamsa hamsaa   lenght sa 1 km ho ge
console.log(years.length-1)

//______________ Array last element __________________
console.log(years[length-1])

//______________ Replace Array Element  __________________
friends[1] = "Talha"


//______________ Nested Array Element  __________________
var student = ["SAQIB",25,'9th','2001-2-10',["Saqjid",'Aq',["India","Pakistan"]]]
console.log(student[0])
console.log(student[1])
console.log(student[2])
console.log(student[3])
console.log(student[4])
console.log(student[4][0])
console.log(student[4][1])
console.log(student[4][2])
console.log(student[4][2][0])
console.log(student[4][2][1])
