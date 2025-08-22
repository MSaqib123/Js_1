//🙂, in JavaScript, you can create a function inside another function.
function outerFunction() {
    console.log("I am the outer function");

    // Inner function
    function innerFunction() {
        console.log("I am the inner function");
    }

    innerFunction(); // Call inner function inside outer
}
outerFunction();




// normal
// function fruiteCutintoPicess(fruite){
//     return fruite*4;
// }

// Arrow
let fruiteCutintoPicess = (fruite) => fruite+4;

function fruiteProccess(apple,orange){
    const applePices = fruiteCutintoPicess(apple)
    const orangePIces = fruiteCutintoPicess(orange)
    const juice = `Juices with ${applePices} pices of apple and Juices with  ${orangePIces} pices of orange is here, please take it
        `;
    return juice;
}

let juiceAfterMilkSheek = fruiteProccess(2,5)
console.log(juiceAfterMilkSheek)
