for (let exer = 0; exer < 3; exer++) {
    let ex = exer;
    console.log("--------- Exercice start : " + (++ex) )
    for (let rep = 0; rep < 6; rep++) {
        let r = rep;
        console.log("Lifting Weight : " + (++r) )
    }
}


//================ Display nested Loop values ============
const st = [
    'Saqib',
    'Afzal',
    2037-1996,
    'developer',
    ["Talhaa bhi","Chota sain","Huzaifa"],
    true
]

for(let i = 0; i<st.length; i++){
    //======= Display ======
    console.log("St Array Values : " , st[i]);
    // console.log("Type of Array value : ",typeof st[i]);


    if(typeof st[i] == 'object'){
        for (let index = 0; index < st[i].length; index++) {
            console.log("==============", st[i][index]);
        }
    }
    
}