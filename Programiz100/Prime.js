// JavaScript Program to Check Prime Number


function isPrime(num){
    if (number <= 1){
        return false;
    }
    // prime start from 2 thats why i starts from 2
    for ( let i = 2; i <=number/2; i++){ // factors of number is half of the numbe only thats why number/2
        if (number%i === 0){
            return false;  
        }
    }
    return true;
}

const number = 12;
if (isPrime(number)){
    console.log("Prime");
}
else{
    console.log("Not Prime");
}