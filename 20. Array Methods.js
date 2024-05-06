const frineds = ["chota sain",'Ákram',"huzafa","talhaa",'Saqib',"Boota"]
console.log(frineds)

//____________ 1. Add ______________
//PUSH   (add at end  & return Length of new Array)
frineds.push("Sajid")
var newLenght = frineds.push("Pakisnta")
console.log(frineds)
console.log(newLenght) //length

//unShift   (add at start  & return Length of new Array) 
var LenghtafterUnshift = frineds.unshift("jon")
console.log(frineds)
console.log(LenghtafterUnshift)

//____________ 2. Remove ______________
//pop  (oposite of Push)
frineds.pop() //remove end
console.log(frineds)

//shift  (oposite of unshift)
frineds.shift() //remove start
console.log(frineds)


//____________ 3. Index of ______________
//return index of  element   if not   then -1
console.log(frineds.indexOf("jon"))  
console.log(frineds.indexOf("saqib"))  
console.log(frineds.indexOf("sdfsdf"))  


//____________ 4. Splice ______________
//to Delete or Add Element in  Spacifice  Index used Splice.
//---- Delete ------



//---- Add --------


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

