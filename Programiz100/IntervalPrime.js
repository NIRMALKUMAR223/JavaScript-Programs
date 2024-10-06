// JavaScript Program to Print All Prime Numbers in an Interval


function isPrime(num){
    if (num <= 1){
        return false;
    }
    // prime start from 2 thats why i starts from 2
    for ( let i = 2; i <=num/2; i++){ // factors of number is half of the numbe only thats why number/2
        if (num%i === 0){
            return false;  
        }
    }
    return true;
}

const number = 12;
for (let i = 1 ; i<=number; i++){
    if (isPrime(i)){
        console.log("Prime "+i);
    }
}