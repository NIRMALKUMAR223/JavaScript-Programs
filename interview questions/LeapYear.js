//Leapyear

const year = 2016;

// === is used to compare data type as well as value
if ((year%4===0 && year%100!=0) || (year%400===0)){ 
    console.log('Leap Year');
}
else{
    console.log('Not Leap Year');
}