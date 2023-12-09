const frineds = ["chota sain","huzafa","talhaa"]
console.log(frineds)

//____________ Add ______________
//PUSH   (add at end  & return Length of new Array)
frineds.push("Sajid")
var newLenght = frineds.push("Pakisnta")
console.log(frineds)

//unShift   (add at start  & return Length of new Array) 
frineds.unshift("jon")
var newLenght = frineds.push("first")
console.log(frineds)

//____________ Remove ______________
//pop  (oposite of Push)
frineds.pop() //remove end
console.log(frineds)

//shift  (oposite of unshift)
frineds.shift() //remove start
console.log(frineds)



//____________ Index of ______________
//return index of  element   if not   then -1
console.log(frineds.indexOf("jon"))  
console.log(frineds.indexOf("saqib"))  
console.log(frineds.indexOf("sdfsdf"))  


//____________ ES6 +  Includes ______________
//return  true  if  exist   --->  else   false
console.log(frineds.includes("jon"))  
console.log(frineds.includes("saqib"))  
console.log(frineds.includes("sdfsdf"))  


//____________ condition ______________

if(frineds.includes("talha")){
    console.log("Talhaa is my friends")
}
