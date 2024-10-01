// gcd

const number1 = 10;
const number2 = 25;


let i = (number1>number2)?number2:number1;

// first find smallest one an the run this loop reverse order

for (;i>=1; i--){
    if (number1%i===0 && number2%i===0){
        console.log(i);
        break;// greatest common divisor
    }
}