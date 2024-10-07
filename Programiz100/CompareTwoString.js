// JavaScript Program to Compare Two Strings

const str1 = 'hello';
const str2 = 'HeLLo';

// we need to check both string are equal or not thats why we convert each string to toLowerCase() or toUpperCase()
console.log(
    (str1.toUpperCase() === str2.toUpperCase())?
    'Same' : 'Not Same'
);
