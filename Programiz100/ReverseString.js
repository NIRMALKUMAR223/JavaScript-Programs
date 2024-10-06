// JavaScript Program to Reverse a String

const reverse = (str)=>{
    var rev = '';
    for ( let i = 0; i<str.length; i++){
        rev = str.charAt(i) + rev;
    }
    console.log(rev);
    
}

const string = 'helloworld';
reverse(string);