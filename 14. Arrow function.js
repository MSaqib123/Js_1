//_________ Arrow function very importent ___________

//__________ Arrow FN _________
//decl
const calcAge= birthYeah => 2023-birthYeah; //very simple

//use
console.log(calcAge(1998))


//__________ Multiline Arrow Fn ___________
const calcReturedYear= birthYeah => {
    let age = (2023 - birthYeah);
    let retuiredYear = 40-age;
    return retuiredYear;
}

console.log("Retured Year remaing : " , calcReturedYear(1996))

//__________ Multiline Parameterize Arrow Fn ___________

const calcReturedYear2= (birthYeah , name) => {
    let age = (2023 - birthYeah);
    let retuiredYear = 40-age;
    return `${name} returied Year = ${retuiredYear}`;
}

console.log("Retured Year remaing : " , calcReturedYear2(1996,'Saqib'))
console.log("Retured Year remaing : " , calcReturedYear2(1999,'Ahamad'))
