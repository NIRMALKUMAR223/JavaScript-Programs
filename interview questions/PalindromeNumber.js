// Palindrome number

function isPalindrome(number){
    let orignal = number;
    let rev = 0;
    while (number!=0){
        let last = number%10;
        rev = (rev*10) + last;
        number = Math.floor(number/10); // 121 => Math.floor(121/10) gives 12 
    }
  
    console.log(
        (orignal===rev)?'Palidrome':'Not Palindrome'
    );
    
}

const number = 121;
isPalindrome(number);