// Palindrome 

const string = 'aabbaa';
var rev = '';

for (let i = 0; i<string.length; i++){
    rev = string.charAt(i) + rev;
}

console.log(
    (rev===string)? 
    'Palindrome':'Not Palindrome'
);