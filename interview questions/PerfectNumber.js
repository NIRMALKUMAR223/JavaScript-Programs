// Perfect Number

function checkPerfectNumber(number){
    
    // sum of factors is equal to the number 
    let count = 0;
    for (let i = 0 ; i <= number/2 ; i++){
        if (number%i==0){ 
            count+=i;
        }
    }
    console.log(
        (number === count)?
        'Perfect Number': 'Not Perfect Number'
    );
}

const number =28;
checkPerfectNumber(number);