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

//________________________________________________
//================================================
//__________________ 1. forEach __________________
//________________________________________________
//================================================
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

// IMPORTANT  -> this can change the Exisiting Array
friends.forEach((e, i, arr) => {
    arr[i] = e.toUpperCase();
});
console.log(friends); // ["ALI", "AHMED", "SARA"]




//________________________________________________
//================================================
//__________________ 2. map _____________________
//________________________________________________
//================================================

//#region  2_Map
//map will generate new Array after  doing some changing in  old array
const upperCaseFriends = friends.map(f => f.toUpperCase());
const lowerCaseFriends = friends.map(f => f.toLowerCase());
console.log(upperCaseFriends)
console.log(lowerCaseFriends)
//#endregion


//________________________________________________
//================================================
//____________ 3. filter ______________
//________________________________________________
//================================================
//#region  
//filter will  get all  Element 
const friendsWithT = friends.filter(friend => friend.includes('t'));
console.log(friendsWithT);

//we can not do the same thing with  map
// because map give return all the value  in the form of  any action 
// do not give filter value 
const friendwithInclude = friends.map(i=>i.includes('i'))
console.log(friendwithI)

//#endregion

//________________________________________________
//================================================
//____________ 4. find ______________
//________________________________________________
//================================================
//find will  find 1st element   and return  single Result value
const friendsWithI = friends.find(friend => friend.includes('i'));
console.log(friendsWithI);


//________________________________________________
//================================================
//____________ 5. findIndex ______________
//________________________________________________
//================================================
const indexWithK = friends.findIndex(friend => friend.includes('k'));
console.log(indexWithK);


//________________________________________________
//================================================
//____________ 6. reduce ______________
//________________________________________________
//================================================
//#region 6_Reduce

// NOTE
// reduce() ek array method hai jo poore array ke elements ko process karta hai aur end me ek single result return karta hai.
// Reduc  work on numbers   
/*
reduce() ek array method hai jo poore array ke elements ko process karta hai aur end me ek single result return karta hai.

Socho tumhare paas numbers ka thaila 🎒 hai, aur tumhe total sum chahiye.
Tum ek dabba 🏦 lete ho (ye accumulator hota hai)
Aur numbers ek ek karke us dabbe me daalte ho.
Akhir me dabba kholte ho → total milta hai ✅

array.reduce((accumulator, currentValue, currentIndex, array) => {
   // logic
}, initialValue);

Naam	            Matlab
accumulator	        Result jo har step ke baad banta hai (dabba)
currentValue	    Abhi wala element (jo haath me hai)
initialValue	    Accumulator ka starting value
*/

//======= 1. Calculate Sum of Array =======
const numbers = [5, 10, 15, 20];
const total = numbers.reduce((acc, currentValue) => acc + currentValue, 0);
console.log(total); 

//let print the process in console
const totals = numbers.reduce((accu, currentValue) => {
    console.log(accu, currentValue);
    return accu + currentValue;   // ✅ yahan return karna zaroori hai   🎒 warna Undefined ay ga
}, 0);
/*
Step by Step Table
Step	dabba (acc)	    sikka (curr)	dabba + sikka	New dabba
1	    0	            5	            0 + 5	            5
2	    5	            10	            5 +10	            15
3	    15          	15	            15 +15	            30
4	    30	            20	            30 +20	            50
Final Result → 50 ✅
*/

// NOTE
//== Confusion  --> Clearing Concept of 0 (initial Value) ==
// the above same  Sum can be happend like this witoout initial Value
console.log("\n");
const totals2 = numbers.reduce((accu, currentValue) => {
    console.log(accu, currentValue);
    return accu + currentValue;
});
console.log("Same Sum : ",totals2)

// BAD
// Well if you did not give  intialValue then ======
// Error will heppend durirng Empty Array
let num =[];// [5, 10, 15, 20];
const totals3 = num.reduce((accu, currentValue) => {
    console.log(accu, currentValue);
    return accu + currentValue;
});
console.log("Same Sum : ",totals3)

// NOTE
//==================== Benifits ================
// 1. reduce() Sirf Sum Ke Liye Nahi Hai ==> Yeh sabse badi wajah hai ke log reduce() prefer karte hain.
// 2.  reduce chhota, clean aur functional style hai.
const totalLength = friends.reduce((total, friend) => total + friend.length, 0);
const sum    = numbers.reduce((a, b) => a + b, 0);     // ✅ Sum
const multi= numbers.reduce((a, b) => a * b, 1);     // ✅ Multiply
const max    = numbers.reduce((a, b) => a > b ? a : b);// ✅ Max value
console.log(totalLength);
console.log(sum);
console.log(multi);
console.log(max);


// GOOD
const nu = [1, 2, 3, 4, 5, 6];

// Pehle sirf even numbers lo, phir unka square, phir unka sum:
const result = nu
    .filter(n => n % 2 === 0)     // [2, 4, 6]
    .map(n => n * n)             // [4, 16, 36]
    .reduce((a, b) => a + b, 0); // 56
console.log(result); // 56 ✅


//===== complete parameters ======
 let reduceArrayNew = friends.reduce((acc,currentValue, currentIndex, array)=> {
        console.log(acc,currentIndex,currentValue,array);
        return acc+array.length;
    } , 0);

    console.log(reduceArrayNew)


//#endregion


//________________________________________________
//================================================
//____________ 7. some ______________
//________________________________________________
//================================================
//its Return True , False value base on condition on Loop
const hasShortName = friends.some(friend => friend.length < 5);
console.log(hasShortName);

//________________________________________________
//================================================
//____________ 8. every ______________
//________________________________________________
//================================================
// Return Single true , false value
const allHaveA = friends.every(friend => friend.includes('a'));
console.log(allHaveA);

//________________________________________________
//================================================
//____________ 9. concat ______________
//________________________________________________
//================================================
const newFriends = ["Raza", "Ali"];
const allFriends = friends.concat(newFriends);
console.log(allFriends);

//________________________________________________
//================================================
//____________ 10. slice ______________
//________________________________________________
//================================================
const someFriends = friends.slice(1, 3);
console.log(someFriends);


//________________________________________________
//================================================
//____________ 11. join ______________
//________________________________________________
//================================================
// convert array to  1 single String by  join which you gave
//const friendsString = friends.join("");
//const friendsString = friends.join(", ");
const friendsString = friends.join("|^|");
console.log(friendsString);


//________________________________________________
//================================================
//____________ 12. replace ______________
//________________________________________________
//================================================
// this will replace only 1st  memeber value to  certain give value
const convertArrayTostring_RemoveASpace = friends.join("").replace(" ","");
console.log(convertArrayTostring_RemoveASpace);


//________________________________________________
//================================================
//____________ 13. replaceAll ______________
//________________________________________________
//================================================
// this will replace All  memebers value to  certain give value
const convertArrayTostring_RemoveAllSpace = friends.join("").replaceAll(" ","");
console.log(convertArrayTostring);

const rep = friends.join("|^|").replaceAll(" ","");
console.log(rep);



//________________________________________________
//================================================
//____________ 14. reverse ______________
//________________________________________________
//================================================
friends.reverse();
console.log(friends);


//________________________________________________
//================================================
//____________ 15. sort ______________
//________________________________________________
//================================================
// it will arange the list base on the  each element lenght
friends.sort();
console.log(friends);


//________________________________________________
//================================================
//____________ 16. flat ______________
//________________________________________________
//================================================
// To remove 1 Level Nested Array list
const nestedArray = [1, [2, [3, [4]], 5]];
const flatArray = nestedArray.flat(2);
console.log(flatArray);


//________________________________________________
//================================================
//____________ 17. flatMap ______________
//________________________________________________
//================================================
const friendss = [
  ["Ali", "Saqib"],
  ["Sara", "ali"],
  ["Umer", "nomi"]
]

//========== (Flat) Remove the Inside Array ==========
const allNames = friendss.flatMap(friend => friend);
console.log(allNames);


// const doubledAndFlat = friendss.flatMap(friend => [friend[0], friend[0].toUpperCase()]);
// console.log(doubledAndFlat);





//1. foreach
    //2 map
    //3 filter
    //4 find
    //5 findIndex
    //6 reduce
    //7 some
    //8 every
    //9 concate
    //10 slice
    //11 join
    //12 replace
    //13 replaceAll
    //14 reverse
    //15 sort
    //16 flat
    //17 flatMap


    