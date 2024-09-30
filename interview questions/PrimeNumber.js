// Prime Number

function isPrime(number){
    
    if(number<=1){
        return false;
    }
    
    for (let i = 2; i<=number/2; i++){
        if (number%i==0){
            return false;
        }
    }
    return true;
}

const number = 13;
console.log(
    isPrime(number)?
    'Prime':'Not Prime'
);