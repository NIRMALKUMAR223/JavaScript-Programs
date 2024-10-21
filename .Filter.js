// Filter

const arr = [1,2,3,4,5,6,7,8,9,10];

const evenArr = arr.filter((value, item, arr)=>{
    return value%2 === 0;
})

console.log(evenArr);

// it is used to filter the existing arr to create an new array

// realtime usecase

const user = [
    {
        name : 'Nirmal',
        age : 23
    },

    {
        name : 'Das',
        age : 17
    },

    {
        name : 'Gowtham',
        age : 23
    }
]

const adult = user.filter((value)=>{
    if (value.age>18 && value.age<120){
        return value;
    }
})

const child = user.filter((value)=>{
    if (value.age>0 && value.age<=18){
        return value;
    }
})

console.log('Adult : \n', adult);
console.log('Children : \n', child);

