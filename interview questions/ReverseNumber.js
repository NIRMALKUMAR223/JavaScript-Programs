// reverse number

function isReverse(number){
    let rev = 0;
    while (number!=0){
        let last = number%10;
        rev = (rev*10) + last;
        number = Math.floor(number/10); // 121 => Math.floor(121/10) gives 12 
    }
  
    console.log(rev);    
}

const number = 12345;
isReverse(number);