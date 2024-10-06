// JavaScript Program to Find the Factors of a Number

const factors = (number)=>{
    for(let i = 1; i <= number; i++){
        if(number % i === 0){
            console.log(i);
        }
    }
}

const number = 36;
factors(number);