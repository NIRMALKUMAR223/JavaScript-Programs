// strong number 

// fact for each individual digits
function factorial(number){
    let fact = 1;
    for (let i = 0; i<=number; i++ ){
        fact*=i;
    }
    return fact;
}
// seperate each digits
function isStrong(number){
    let original = number;
    let strong = 0;
    while (number!=0){
        let last = number % 10;
        strong += factorial(last);
        number = Math.floor(number/10);
    }

    console.log(
        (strong === number)?
        'Strong Number' : 'Not Strong Number'
    );
    
}

const number = 143;
isStrong(number);
// an number an sum of each individual factor sum is equal to the number its self is known as strong number