//_________ Arrow function very importent ___________
//arrow function is short way of wriging funciton in javascripit

const arrowFn = fn => console.log("Pakistan");
arrowFn();

//__________ Arrow FN _________
//decl
const calcAge= birthYeah => 2023-birthYeah; //very simple

//use
console.log(calcAge(1998))


//__________ Multiline Arrow Fn ___________
let calcReturedYear = birthYear => {
    let age = (2025-birthYear);
    let retuirementPerioud = 40;
    let retuiredYear = retuirementPerioud-age;
    if(retuiredYear > 0 ){
        return `${retuiredYear} are remaning from retirement`
    }
    else{
        return `${retuiredYear} you are alredy expired 😂`
    }
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

//--------------------------- Multiple parameters arrow function ----------------------------------
const calculator = (v1,v2,operator)=>{
    v1 = parseInt(v1);
    v2 = parseInt(v2);
    if(operator == "+"){
        return v1+v2;
    }
    if(operator == "-"){
        return v1-v2;
    }
    if(operator == "*"){
        return v1*v2;
    }
    if(operator == "/"){
        return v1/v2;
    }
}
console.log(calculator(12,2,"*"));
