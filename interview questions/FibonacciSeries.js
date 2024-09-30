// fibonacci Series

var number1 = -1;
var number2 = 1;
var number = 10;

for (let i =0; i<=number; i++){
    var number3 = number1 + number2;
    console.log(number3);
    number1 = number2;
    number2 = number3;  
}