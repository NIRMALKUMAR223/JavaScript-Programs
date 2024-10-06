// JavaScript Program to Make a Simple Calculator


const calculator = (num1, num2, operation)=>{
    console.log(
        (operation === '+')?
        num1+num2 : (operation === '-')?
        num1-num2 : (operation === '*')?
        num1*num2 : (operation === '/')?
        num1/num2 : 'Invalid Input'
    );   
}

const number1 = 10;
const number2 = 20;
const operation = '*';
calculator(number1, number2, operation);