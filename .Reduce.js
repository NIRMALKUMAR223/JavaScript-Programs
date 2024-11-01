// reduce

const arr = [1,2,3,4,5,6,7,8,9,10];

var total = arr.reduce((total, element, index, arr)=>{
        return total+element
})

console.log(total);


// it is used to calaculate the 