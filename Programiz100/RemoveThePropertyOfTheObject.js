// JavaScript Program to Remove a Property from an Object

const obj = {
    firstName : 'nirmal',
    lastName : 'kumar',
    greeting : ()=>{
        console.log('welcome to js');
    }
}

// calling an function in an object
obj.greeting();

// delete is used to delete the properties of the object
delete obj.greeting;
delete obj.lastName;

console.log(obj);
