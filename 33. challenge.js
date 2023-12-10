const calcTip = function(bill){
    return bill>= 50 && bill<=300 ? bill*0.15 :  bill*0.2 ;
}

const bills = [22,295,275,37,185, 10,1200]

const tipes = []
const totals = [];

for (let i = 0; i < array.length; i++) {
    const tip = calcTip(bills[i]);
    tipes.push(tip);
    totals.push(tip+bills[i])
}
console.log(bills,tipes,totals)

//------- average _____________
const calcAvg = function(arr){
    var sum = 0;
    for (let I = 0; I < arr.length; I++) {
        sum += arr[I];
    }
    return sum/arr.length;
}

console.log(calcAvg(tipes) , calcAvg(bill) , calcAvg(totals))