// JavaScript Program to Find HCF or GCD

const gcd = (num1, num2)=>{
    let largest = (num1>num2)?num1:num2;
    for (let i = largest; i>=1; i--){
        if (num1%i === 0 && num2%i ===0){
            console.log("Gcd is "+i);
            break;
        }
    }
}

const number1 = 20;
const number2 = 30;
gcd(number1, number2);