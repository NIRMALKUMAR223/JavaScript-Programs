// JavaScript Program to Convert the First Letter of a String into UpperCase

const str = 'hello world';

// str.charAt(0) it gives first char of an string and i change to upper case using toUpperCase() 
// str.splice(1) it removes the first char of of an string
 
// after that i am adding both converted char and string 
const res = str.charAt(0).toUpperCase() + str.slice(1);
console.log(res);
