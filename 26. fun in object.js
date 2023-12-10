const saqib = {
    fullName:'Saqib',
    mass:78,
    height:1.69,
    calcBMI : function(){
        this.bmi = this.mass /this.height ** 2;
        return this.bmi;
    }
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