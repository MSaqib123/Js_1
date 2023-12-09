//______ Calculate Average score
const averageScore = (a,b,c) => (a+b+c)/3;

//______ get everage ____
let dolphineScore = averageScore(88,99,77)
let  cowalaScore = averageScore(22,44,22)

//____ check winer ____
let winnerCheck =  (dolphin , cowala)=>{
    if(dolphin >= cowala*2){
        console.log("Dolphine is winner")
    }
    else if(cowala >= dolphin*2){
        console.log("Cowala is winner")
    }
    else{
        console.log("no one wins")
    }
}

//____ check winer ____
winnerCheck(dolphineScore,cowalaScore)