// Magic number

function isMagic(number){
    let result = 0;
    while (number!=0){
        let last = number %10;
        result += last;
        number = Math.floor(number/10);
    }
    if (result >= 0 && result <=9){
        console.log(
            (result===1)?
            'Magic' : 'Not Magic'
        );        
    }else{
        isMagic(result);
    }
}

const number = 1234;
isMagic(number);

// magic is an number each indidual sum untill get single digit if that single digit is one that 
// is called "magic number"