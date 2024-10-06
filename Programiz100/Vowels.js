// JavaScript Program to Count the Number of Vowels in a String

const str = 'welcome to javascript';
let vowels = 0;

for (let i = 0; i<str.length; i++){
    var char = str.charAt(i);
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ){
        vowels += 1;
    }
}

console.log(vowels);