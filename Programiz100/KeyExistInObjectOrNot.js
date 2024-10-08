// JavaScript Program to Check if a Key Exists in an Object

const obj = {
    name : 'nirmal',
    age : 22,
}

// 'age' in obj is used to check the property is present in an object or not
if ('age' in obj){
    console.log('true');
}
else{
    console.log('false');
}