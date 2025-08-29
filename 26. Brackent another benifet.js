const developer = {
    firstName:'Saqib',
    lastName : 'Ali',
    age : 2023 - 1996,
    jobs : 'developer',
    friends:['chota sain','talhaa','hozaifa']
}
//______________ bracket syntax _______________ 90 % used
const interstedIn = prompt("what you want to insert \n\ firstName,lastName,jobs,age,firends")
if(developer[interstedIn]){
    console.log(developer[interstedIn])
}
else{
    console.log("Wront entry")
}

//______________ . syntax  (Errors) Undfied _______________
console.log(developer.interstedIn)


//______________ ______ chalange __________________
console.log(`
    ${developer.firstName} 
    has ${developer.friends.length} and 
    his best friend is ${developer.friends[0]}
`)
