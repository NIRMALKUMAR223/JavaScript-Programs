// JavaScript Program to Merge Property of Two Objects

const obj1 = {
    name : 'Nirmal kumar',
    age : 23,
}

const obj2 = {
    degree : 'MCA',
    position : 'Js developer'
}

const mergeObject = {...obj1, ...obj2};

console.log(mergeObject);