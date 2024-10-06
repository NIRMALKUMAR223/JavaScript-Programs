// JavaScript Program to Check Leap Year

const Year = 2004;

if (Year % 400 === 0 || (Year % 4 ===0 && Year % 100 !== 0)){
    console.log("Leap year");    
}
else{
    console.log("Not a leap year");
    
}