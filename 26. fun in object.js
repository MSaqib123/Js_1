const saqib = {
    fullName:'Saqib',
    mass:78,
    height:1.69,
    calcBMI : function(){
        this.bmi = this.mass / this.height ** 2; //**  exponent hota ha
        return this.bmi;
    }
}

const saqibBMI = saqib.calcBMI();
console.log("Saqib's BMI:", saqibBMI);

// Evaluating if Saqib's BMI falls within the healthy range
if (saqibBMI >= 18.5 && saqibBMI <= 24.9) {
    console.log("Saqib's BMI is within the healthy range.");
} else {
    console.log("Saqib's BMI is not within the healthy range.");
}



const sajid = {
    fullName:'sajid',
    mass:94,
    height:1.95,
    calcBMI : function(){
        this.bmi = this.mass /this.height ** 2;
        return this.bmi;
    }
}
saqib.calcBMI();
sajid.calcBMI();
console.log(saqib.bmi , sajid.bmi)


//-------------  Get  ----------------
//______________ Now i don't want to Acceut function ________________
//mean wo automaticaally  dedect kr laa  
const friends = {
    fullName:'Saqib',
    mass:78,
    height:1.69,
    // BMI:0,
    // BMIFn : function(){
    //     this.BMI = this.mass /this.height ** 2;
    //     return this.BMI;
    // }
    get BMI(){
        return this.mass /this.height ** 2;;
    }
}
//saqib.BMIFn()
console.log(friends.BMI)