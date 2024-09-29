//reverse string

const str = 'malayalam';
var rev = '';
for (i of str){
    rev = i + rev; 
}
console.log(rev);

// use var to reinitialize the value if you use const that will not work 