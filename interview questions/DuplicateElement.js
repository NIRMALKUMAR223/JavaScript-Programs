// duplicate element

const arr = [1,2,9,3,4,5,1,2];
const dup = new Set();
const unique = new Set();

for (let i = 0; i<arr.length; i++){    
    if(unique.has(arr[i])){   // unique.has(arr[i]) will the arr[i] element is present or not 
        dup.add(arr[i]);      // if it is present we have to add in duplicate set
    }
    else{                     // else we add to unique
        unique.add(arr[i]);
    }
}
console.log(dup); // duplicate element
console.log(unique); // unique element

