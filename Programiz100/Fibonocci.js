// JavaScript Program to Print the Fibonacci Sequence


const Fibonacci = (iter)=>{
    let number1 = -1;
    let number2 = 1;
    for ( let i = 1; i<=iter; i++ ){
        let number3 = number1 + number2;
        console.log(number3);
        number1 = number2;
        number2 = number3;
    }
}

const number = 10;
Fibonacci(number)