// JavaScript Program to Find the Sum of Natural Numbers

const sum = (num)=>{
    let sum = 0;
    for (let i = 1; i<= num; i++){
        sum+=i;
    }
    console.log(sum);    
}

const number = 10;
sum(number);