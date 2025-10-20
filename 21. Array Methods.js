
const frineds = ["chota sain",'Ákram',"huzafa","talhaa",'Saqib',"Boota"]
console.log(frineds)

//____________ 1. Add ______________
//PUSH          (add at end  & return Length of new Array)
frineds.push("Sajid")
var newLenght = frineds.push("Pakisnta")
console.log(frineds)
console.log(newLenght) //length

//UNSHIFT       (add at start  & return Length of new Array) 
var LenghtafterUnshift = frineds.unshift("jon")
console.log(frineds)
console.log(LenghtafterUnshift)

//____________ 2. Remove ______________
//POP           (oposite of Push)
frineds.pop() //remove end
console.log(frineds)

//SHIFT         (oposite of unshift)
frineds.shift() //remove start
console.log(frineds)


//____________ 3. Index of ______________
//return index of  element   if not   then -1
console.log(frineds.indexOf("jon"))  
console.log(frineds.indexOf("saqib"))  
console.log(frineds.indexOf("sdfsdf"))  


//____________ 4. Splice ______________
//to Delete or Add Element in  Spacifice  Index used Splice.

//---- Delete_1 ------
//array.splice(deleteIndex , howManyElementYouWantoDelete)
console.log(frineds)
let indexToDelete = 2 //huzafa
frineds.splice(indexToDelete , 1)
console.log(frineds)

//---- Delete_2 ------
// when 1 parameter is pased
// Deletes everything from index 2 to the end.
frineds.splice(2);
console.log(frineds);



//---- Add --------
//array.splice(deleteIndex , 0 (weDoNotDeleteAnyThing) ,  "AddAnythng")
// to add   set the delete lenght = 0
let addedAtIndex = 1 //Ákram sa phlaa
frineds.splice(addedAtIndex,0,"Rehmaan")
console.log(frineds)


//---- Replace --------
//array.splice(deleteIndex , 0 (weDoNotDeleteAnyThing) ,  "AddAnythng")
// to replace   set the delete lenght = 1  
let replaceAtIndex = 1 //Rehman ko delete kr kaa  kreem
frineds.splice(addedAtIndex,1,"Kareem")
console.log(frineds)


//---- Remove Center Element --------
let CenterindexToRemove = Math.floor(frineds.length / 2);  //talha is ceneter
alert(CenterindexToRemove)
frineds.splice(CenterindexToRemove,1)
console.log(frineds)

//---- Add Center Element --------
let CenterindexToAdd = Math.ceil(frineds.length / 2);  //saqib is ceneter
alert(CenterindexToAdd)
frineds.splice(CenterindexToAdd,0,'zohab')
console.log(frineds)



//____________ ES6 +  Includes ______________
//return  true  if  exist   --->  else   false
console.log(frineds.includes("jon"))  
console.log(frineds.includes("saqib"))  
console.log(frineds.includes("sdfsdf"))  

if(frineds.includes("talha")){
    console.log("Talhaa is my friends")
}

let users = ["Talha@gmail.com","Adan","Daniyal","Saqib"]
if(users.includes("Talha")) //false //true
{
    console.log("Login Successfully")
}
else{
    console.log("Invlide user")
}
