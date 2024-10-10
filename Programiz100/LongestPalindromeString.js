// javascript program to find the longest palindrome in an given string

const isPalindrome = (str)=>{

    // to reverse the string split the string using split('')
    // then reverse the splited string using reverse()
    // then join the string using join()
    if (str === str.split('').reverse().join('')){
        return true;        
    }

    return false;
}

const str = 'ababba';
var longest = '';

// substring is used to get a part of the string 
for (let i = 0; i<str.length; i++){
    for (let j=i+1; j<=str.length; j++){
        var sub = str.substring(i,j);
        if (isPalindrome(sub)){
            if (sub.length > longest.length){
                longest = sub
            }
        }
    }
}

console.log("Longest Substring is "+ longest);