//------- Operand  , Operator ----------
//   1 + 2       ,  + operator  ,   1 2  operands

//1 arithmetic   +,-,*,/,% 
    
//1.1 concatination operator

//2 assignment  = , += , -= 
    //postfixed  , preFixed  ++ , --

//3 logical operat
    //  == , > , < , >= , <=

//4 Comparison operators
    // && , || , !


//5 bitwise
    // & , | , ~ , ^ , << , >>
    // Bitwise AND, OR, NOT, XOR, left shift, right shift


    


//___________ 1. Arthimatics ____________________
let add = 1+1
let sub = 5-2
let mult = 5*2
let divid = 5/2
let modulas = 5%2
let power = 5**2;

//concatination 
let fname = "M"
let lName = "Saqib"
console.log(fname + " " + lName)

//____________ 2 Assignemnt Op __________
let x = 10 + 5;
x += 25; // x = x + 25
x *= 25; // x = x * 25
x++;  // x+1  postfixed   increment oper
x--;  // x-1  postfixed   decrement
++x;  // 1+x  prefixed
--x;// 1-x  prefixed

//____________ 3 Comparison  Op __________
let a = 55;
let b = 55;
let result = (a==b);
result = (a!=b)
result = (a>b)
result = (a<b)
result = (a>=b)
result = (a<=b)

//____________ 4 Logical Op __________
let m = 55;
let n = 55;
result = (m==55 && n != 55)
result = (m==55 || n != 55)




//____________ 5 Bitwise Op __________
        // Bitwise operators are used to perform operations on binary numbers at the bit level.

        //Bitwise operator ka matlab hota hai “number ke andar jo 0 aur 1 (bits) hote hain, unpe operation karna”.
        //Matlab normally hum number pe kaam karte hain (jaise 5 + 3),
        //lekin bitwise me hum andar ke bits pe kaam karte hain (jaise 0101 & 0011).

        /*
        💡 Pakistan jugaar example:
            Socho tumhare paas 2 switch board hain —
            ek me 0101 (light on/off pattern), aur doosre me 0011.
            Agar dono me AND (&) lagao to sirf woh bulb jalta hai jahan dono side switch ON ho.
            Yani bits pe jugaar! 😄
        */

        // & , | , ~ , ^ , << , >>
        // Bitwise AND, OR, NOT, XOR, left shift, right shift
        // exmaple of bitwise
        let aa = 5;  // in binary: 0101
        let bb = 3;  // in binary: 0011
        console.log(aa & bb); // Bitwise AND: 0001 (1 in decimal)
        console.log(aa | bb);
        console.log(aa ^ bb);
        console.log(~aa);
        console.log(aa << 1);
        console.log(aa >> 1);
