const measureKelvin = function(){
    const measurement = {
        type:"temp",
        unit:"celsius",
        value:prompt('Degree celsius'),
    }

    //console.log(measurement)
    console.table(measurement)

    console.error(measurement.value)
    console.warn(measurement.value)
}
console.log(measureKelvin())