// amstrong number

function operation(number,len){
    let multi = 1;
    for (let i = 0; i<len; i++){
        multi *= number;
    }
    return multi;
}

function isAmstrongNumber(number){
    let len = number.toString().length;
    let orignal = number;
    let result = 0;
    while (number!=0){
        let last = number%10;
        result += operation(last,len);
        number = Math.floor(number/10);
    }

    console.log(
        (result === orignal)?
        'Amstrong Number' : 'Not Amstrong Number'
    );
    
    
}

const number = 153;
isAmstrongNumber(number);