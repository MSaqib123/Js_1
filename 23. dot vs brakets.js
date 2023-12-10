const developer = {
    firstName:'Saqib',
    lastName : 'Ali',
    age : 2023 - 1996,
    jobs : 'developer',
    friends:['Michael','Peter','Steven']
}

//______ show as object _____
console.log(developer)

//______ destructure the object ______
console.log(developer.firstName)
console.log(developer.lastName)
console.log(developer.age)
console.log(developer.friends[0],developer.friends[1],developer.friends[2])


//_________________  1.  get by  dot Notation . __________________
console.log(developer.firstName)
console.log(developer.lastName)
console.log(developer.age)

//_________________  2.  get by  bracket Notation [] __________________
console.log(developer['firstName'])
console.log(developer['lastName'])
console.log(developer['age'])


//====_________________  ___ Banifit of  [] brakcete __________________====
const keyName = 'Name'
console.log(developer['first'+keyName])
console.log(developer['last'+keyName])
console.log(developer['age'])

//-- we can not do this in  . syntax 0000000000000   ERRRRRRRRoooorR
// console.log(developer.('first'+keyName));    ERROR