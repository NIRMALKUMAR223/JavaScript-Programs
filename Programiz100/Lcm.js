// JavaScript Program to Find LCM

const lcm = (num1, num2)=>{
    let min = (num1>num2)?num2:num1;
    while (true){
        if (min%num1 ===0 && min%num2 ===0){
            console.log("Lcm is "+min);
            break;
        }
        min++;
    }
}

const number1 = 20;
const number2 = 80;
lcm(number1, number2);