// JavaScript Program to Find the Factorial of a Number

const fact = (num)=>{ 
    let res = 1;
    for (let i = 1; i<=num; i++){
        res*=i;
    }
    console.log("Factorial of "+num+" is "+res);
    
}

const number = 5;
fact(number)