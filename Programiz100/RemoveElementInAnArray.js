const arr1 = [1,2,3,4,6,6];
const arr2 = [];

arr1.forEach((item)=>{

    // includes is used to check the given element is present 
    if (!arr2.includes(item)){
        arr2.push(item);
    }
})

console.log(arr2);

// creating an array with unique element
console.log(Array.from(new Set(arr1)));