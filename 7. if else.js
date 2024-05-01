let century;

const birthyear = 1998

//---- if -------
if(birthyear >= 2000){
    century = 21;
    console.log(century)
}
else{
    century = 20;
    console.log(century)
}


//----- Nested if -----------
let userName = "Admin"
let password = "12345"

if (userName == "Admin"){
    if(password == "12345"){
        console.log("Login Successfully")
    }
    else{
        console.log("Wrong Password")
    }
}
else{
    console.log("wrong UserName")
}



//---- if else -------
let day = "Sunday"

if(day == "Sunday")
{
    console.log("Off day")
} 
else if(day == "Saterday")
{
    console.log("Off day")
}
else{
    console.log("working Day")
}