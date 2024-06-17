const st = [
    'Saqib',
    'Afzal',
    2037-1996,
    'developer',
    ["Talhaa bhi","Chota sain","Huzaifa"],
    true
]

//initialize empty array
const types = [];

for(let i = 0 ; i< st.length ; i++){
    console.log(st[i] , typeof st[i])    
    //________________ 1st way ________________
    // types[i] = typeof st[i]

    //________________ 1st way ________________
    types.push(typeof st[i])
}

console.log(types)

//_________________ Ages ___________________
const years = [1991,1997,2007,2011 , 2000]
const ages = [];
for (let i = 0; i < years.length; i++) {
    // ages[i] = 2023 - years[i];
    ages.push(2023-years[i])
}
console.log(ages)


