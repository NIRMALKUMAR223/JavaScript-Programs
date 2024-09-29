// spread operator is used to copy the existing array or object 
// changes made by one will not affect others and 

const arr = ['nirmal', 'kumar','mca'];

// In this case changes made by one reference variable will affect other this is known as shallow copy
const arrCopy = arr; 
console.log(arrCopy);

// in this case changes made by one reference variable will not affect other this is known as deep copy
const arrDeepCopy = [...arr];
console.log(arrDeepCopy);

// object use {...user} for array [...user]