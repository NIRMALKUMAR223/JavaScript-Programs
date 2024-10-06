// JavaScript Program to Guess a Random Number

const random = (num)=>{
    var random = Math.floor(Math.random()*10+1);  // generate random numbers from 1 to 10 Math
    console.log(random);   
}

const number = 23;
random(number)