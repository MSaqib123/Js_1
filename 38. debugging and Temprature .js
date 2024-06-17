
//__________________ 1st Program ___________________
const measureKelvin = function(){
    const measurement = {
        type:"temp",
        unit:"celsius",
        value:Number(prompt('Degree celsius')),
    }
    //console.log(measurement)
    // console.error(measurement.value)
    // console.warn(measurement.value)
    console.table(measurement)

    const kelvein = measurement.value + 273;
    return kelvein;
}
console.log(measureKelvin())

//__________________ 2nd Program ___________________
const calcTempAmplitudeFunc = function(t1,t2){
    const temps = t1.concat(t2);
    console.log(temps)

    let max = temps[0]
    let min = temps[0]
    
    for (let i=0; i<temps.length; i++){
            const curTemp = temps[i];
            if (typeof curTemp != 'number') continue;
            
            if(curTemp > max) max = curTemp;
            if(curTemp < min) min =curTemp;
    }
    console.log(max,min);
    return max-min;
}

const amplitude = calcTempAmplitudeFunc([3,5,91],[2,1,5]);
console.log(amplitude)