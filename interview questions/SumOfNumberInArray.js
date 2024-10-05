// sum of number in an array

const arr = [1,2,3,4,5,6,7,8,9,10];
let count =0;
for (let i of arr){
    count+=i; 
}
console.log(count);


// short method
// var sum = 0;
// arr.forEach((item)=>{
//     sum+=item;
// });
// console.log(sum);