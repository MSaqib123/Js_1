//_______ Nested Array _________
const hobies = new Array("Getup early","Play game","JOyfull" ,"Happy")
const friends = ["Shazad","NOman","Huzafaa" , hobies]

//______ Array with function __________
const calcAge = function(birthYear){
    return 2023 - birthYear
}
const year = [1990,2000,2005,2010]

// const ag1 = calcAge(calcAge(year[0]))
// const ag2 = calcAge(calcAge(year[1]))
// const ag3 = calcAge(calcAge(year[2]))

//store in array 
const ages = [calcAge(year[0]),calcAge(year[1]),calcAge(year[2])]
