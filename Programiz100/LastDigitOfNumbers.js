// JavaScript Program to Check if the Numbers Have Same Last Digit


const checkLast = (num1, num2, num3)=>{
    let last1 = num1 % 10;
    let last2 = num2 % 10;
    let last3 = num3 % 10;
    console.log(
        (last1 === last2 && last1 === last3)?
        'Same Last Digit' : 'Last Digit Are Not Same'
    );    
}

const number1 = 20;
const number2 = 30;
const number3 = 40;
checkLast(number1, number2, number3);