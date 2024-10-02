// factorial

function factorial(number){
    let fact = 1;
    for (let i = 1; i<= number ; i++){
        fact *= i;
    }

    console.log(fact);
    
}

const number = 5;
factorial(number)