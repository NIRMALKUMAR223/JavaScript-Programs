// map

const obj = [
    {
        name : 'iphone',
        price : 79999,
        total : 4
    },
    {
        name : 'dell',
        price : 800000,
        total : 2
    },
]

// map is used to modify the existing data it return new modified data we have to store it

const totalPriceOfEachItem = obj.map(( item, index, arr)=>{
    return item.price * item.total;
});

console.log(totalPriceOfEachItem);