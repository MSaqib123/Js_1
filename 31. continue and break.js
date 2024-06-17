//_________________ Continue and break ___________________
const st = [
    'Saqib',
    'Afzal',
    2037-1996,
    '23423',
    2342,
    'developer',
    ["Talhaa bhi","Chota sain","Huzaifa"],
    true
]

//_________ Continue ________
//loop will continue  but  at certain condition   --> iteration  skip
for (let i = 0; i < st.length; i++) {
    
    if(typeof st[i] !== 'string') continue;
    console.log(st[i] , typeof st[i])
    
}

//_________ break ________
//loop will break or distroy if    certian condition true
for (let i = 0; i < st.length; i++) {
    
    if(typeof st[i] !== 'string') break;
    console.log(st[i] , typeof st[i])
    
}