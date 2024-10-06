// JavaScript Program to Find the Largest Among Three Numbers

const number1 = 3;
const number2 = 5;
const number3 = 10;

console.log(
    (number1 > number2 && number1 > number3)?
    'Number '+number1+' is greatest' : (number2 > number3)?
    'Number '+number2+' is greatest':'Number '+number3+' is greatest'
);