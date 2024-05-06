
//dolphen  and  Dog  run 3 time   wth different score
//1. Find Winner simple Winner
//2. Find  winner with Averg rating
//3. Wines only  must have  points over 100
//4. Convert to function bass
//5. winner should have  2 times gretter then pionts of compatitive team


//======================= 1. ========================
// let dolphone = (50+ 50 + 40)
// let clowaa = (50 + 50 + 40)

// if(dolphone> clowaa){
//     console.log("dolphone wines 🏆 , " , dolphone)
// }

// else if(clowaa > dolphone){
//     console.log("clowaa wines 🏆, ",  clowaa)
// }

// else if(clowaa === dolphone){
//     console.log("boht wines 🏆 ,", clowaa , dolphone)
// }

// else{
//     console.log("no one wines")
// }

//======================= 2. ========================
// let dolphone = (50+ 50 + 40) /3
// let clowaa = (50 + 50 + 40) / 3

// if(dolphone> clowaa){
//     console.log("dolphone wines 🏆 , " , dolphone)
// }
// else if(clowaa > dolphone){
//     console.log("clowaa wines 🏆, ",  clowaa)
// }
// else if(clowaa === dolphone){
//     console.log("boht wines 🏆 ,", clowaa , dolphone)
// }
// else{
//     console.log("no one wines")
// }


//======================= 3. ========================
// let dolphone = (50+ 50 + 40) /3
// let clowaa = (50 + 50 + 40) / 3

// if(dolphone> clowaa && dolphone > 100){
//     console.log("dolphone wines 🏆 , " , dolphone)
// }
// else if(clowaa > dolphone && clowaa > 100){
//     console.log("clowaa wines 🏆, ",  clowaa)
// }
// else if(clowaa === dolphone && clowaa > 100 && dolphone > 100){
//     console.log("boht wines 🏆 ,", clowaa , dolphone)
// }
// else{
//     console.log("no one wines" , dolphone, clowaa   )
// }


//======================= 4. ========================
// let avergScore = (v1,v2,v3)=> v1+v2+v3/3;

// let dollphinScore = avergScore(110,10,100)
// let clowaaScore = avergScore(10,50,100)

// let checkWinner = (dollphinScore,clowaaScore)=> {
//     if(dollphinScore > clowaaScore && dollphinScore > 100){
//         console.log("dollphinScore wines 🏆 , " , dollphinScore)
//     }
//     else if(clowaaScore > dollphinScore && clowaaScore > 100){
//         console.log("clowaa wines 🏆, " ,  clowaaScore)
//     }
//     else if(clowaaScore === dollphinScore && clowaaScore > 100 && dollphinScore > 100){
//         console.log("boht wines 🏆 ," , clowaaScore , dollphinScore)
//     }
//     else{
//         console.log("no one wines" , dollphinScore, clowaaScore   )
//     }
// }


//======================= 5. =========================
//______ Calculate Average score
const averageScore = (a,b,c) => (a+b+c)/3;

//______ get everage ____
let dolphineScore = averageScore(88,99,77)
let cowalaScore = averageScore(22,44,22)

//______ check winer ____
let winnerCheck =  (dolphin , cowala)=>{
    if(dolphin >= cowala*2){
        console.log("Dolphine is winner 🏆")
    }
    else if(cowala >= dolphin*2){
        console.log("Cowala is winner 🏆")
    }
    else{
        console.log("no one wins")
    }
}

//____ check winer ____
winnerCheck(dolphineScore,cowalaScore)