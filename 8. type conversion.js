//____________ integer _______________
let v1 = '25'
console.log('v1 ' , typeof v1 , (v1 + 1))

v1 = Number(v1)
console.log('v1', typeof v1 , (v1 + 1))

v2 = prompt("Enter Number")
v2 = parseInt(v2)
v3 = v1 + v2;
console.log("sum of v1 , v2 : " , v3)

v4 = prompt("Enter Number")
v4 = parseFloat(v2)
v5 = v1 + v4;
console.log("sum of v1 , v2 : " , v3)

//____________ string _______________
name = prompt("Enter Name")
name = String(name)
console.log("sum name : " , v3)
