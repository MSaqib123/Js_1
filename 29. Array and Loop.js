const st = [
    'Saqib',
    'Afzal',
    2037-1996,
    'developer',
    ["Talhaa bhi","Chota sain","Huzaifa"],
    true
]

for(let i = 0 ; i< st.length ; i++){
    console.log(st[i] , typeof st[i])
}




// loop 
// ghomanaa means asee cheez jo  certeen condtion pr  runing me rhaa , repeate hoti
let multi = 1;  // 1 ,2 ,3, 4, 5..... 10
let multiEnd = Number(prompt("Give the table Multiples your required"));   ;
let tableNumber = Number(prompt("Give the table number"));   // 2 

for(multi; multi<=multiEnd; multi++){
    console.log(`${tableNumber} * ${multi} = ${tableNumber * multi}`);
}