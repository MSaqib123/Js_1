const friends = ["chota sain",'Ákram',"huzafa","talhaa",'Saqib',"Boota"]

//==============================================================
//================= Advance Array methods ======================
// what they do.  ==> the same work we can do by using for loop
// but  ES6 advance method  will the same workin 1 to 2 line
// and For loop is very loong and lengthy process to work 
// means ya hamaraa  zydaa lines of code ka work km line me kr dataa han
//==============================================================

//====== Old js  ES5 ========
// for loop 
// while loop 
// do while loop


//======= ES6 mehtods ==========

//____________ 1. forEach ______________
//for loop ke tarha   forEach  array ka lya hota ha speccial for array

//== 1. 1st way which is most used ==
// friends.forEach(item=>{
//     console.log(item);
// })
friends.forEach((item,index)=>{
    console.log(`${item} is at ${index}`);
})

//== 2. 2nd way not used now ==
friends.forEach(function(item,index){
    console.log(`${item} is at ${index}`);
})


//____________ 2. map ______________
//map will generate new Array after  doing some changing in  old array
const upperCaseFriends = friends.map(f => f.toUpperCase());
const lowerCaseFriends = friends.map(f => f.toLowerCase());
console.log(upperCaseFriends)
console.log(lowerCaseFriends)

//____________ 3. filter ______________
//filter will  get all  Element 
const friendsWithT = friends.filter(friend => friend.includes('t'));
console.log(friendsWithT);

//we can not do the same thing with  map
// because map give return all the value  in the form of  any action 
// do not give filter value 
const friendwithInclude = friends.map(i=>i.includes('i'))
console.log(friendwithI)


//____________ 4. find ______________
//find will  find 1st element   and return  single Result value
const friendsWithI = friends.find(friend => friend.includes('i'));
console.log(friendsWithI);

//____________ 5. findIndex ______________
const indexWithK = friends.findIndex(friend => friend.includes('k'));
console.log(indexWithK);

//____________ 6. reduce ______________
const totalLength = friends.reduce((total, friend) => total + friend.length, 0);
console.log(totalLength);

//____________ 7. some ______________
const hasShortName = friends.some(friend => friend.length < 5);
console.log(hasShortName);

//____________ 8. every ______________
const allHaveA = friends.every(friend => friend.includes('a'));
console.log(allHaveA);

//____________ 9. concat ______________
const newFriends = ["Raza", "Ali"];
const allFriends = friends.concat(newFriends);
console.log(allFriends);

//____________ 10. slice ______________
const someFriends = friends.slice(1, 3);
console.log(someFriends);

//____________ 11. join ______________
const friendsString = friends.join(", ");
console.log(friendsString);

//____________ 12. reverse ______________
friends.reverse();
console.log(friends);

//____________ 13. sort ______________
friends.sort();
console.log(friends);


//____________ 14. flat ______________
const nestedArray = [1, [2, [3, [4]], 5]];
const flatArray = nestedArray.flat(2);
console.log(flatArray);


//____________ 15. flatMap ______________
const doubledAndFlat = friends.flatMap(friend => [friend, friend.toUpperCase()]);
console.log(doubledAndFlat);

