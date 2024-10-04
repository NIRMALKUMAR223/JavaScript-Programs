// occurence array

const arr = [1,2,3,4,32,1,4,5,3,12];
const counted = new Set();

for (let i=0; i<arr.length; i++){
    let count=0;
    for (let j=0; j<arr.length; j++){
        // it return false we intensely make it true 
        // if it is true that element is already counted  so no need to count it again 
        if (!counted.has(arr[i])){  
            if(arr[i]==arr[j]){
                count++;
            }
        }
    }

    if(count!=0){
        console.log(arr[i] + " : "+count);
        counted.add(arr[i]);
    }

}