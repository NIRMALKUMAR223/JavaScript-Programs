// JavaScript Program to Generate Random String

const str = "qwertJFYUFUYVHhjk1234567890!@#$%^&*";

var randomString = '';
for (let i = 0; i <= 5; i++){
    var random = Math.floor(Math.random()*str.length);
    randomString += str.charAt(random);
}
console.log(randomString);