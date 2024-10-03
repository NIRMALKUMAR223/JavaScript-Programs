// Unique Number

function isUnique(number){
    let result = false;
    const check=(num, last)=>{
        let count = 0;
        while(num != 0){
            let lastNumber = num %10;
            if(lastNumber == last){
                count++;
            }
            num = Math.floor(num/10);                   
        }     
        if(count > 1){
            return true;
        }else{
            return false;
        }
    }
    while (number!=0){
        let last = number % 10;
        check(last)?
        result = true : result = false;
        number = Math.floor(number/10);        
    }
    console.log(
        (result)?
        'Unique Number':'Not Unique'
    );    
}

const number = 1234;
isUnique(number);