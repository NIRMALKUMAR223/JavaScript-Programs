// javascript program to find the longest palindrome in an given string

const isUniqueSubString = (str)=>{
    for (let i=0; i<str.length; i++){
        for (let j=i+1; j<str.length; j++){
            if (str.charAt(i) === str.charAt(j)){
                return false;
            }
        }
    }
    return true;
}

const str = 'abababopa';
var longest = '';

// substring is used to get a part of the string 
for (let i = 0; i<str.length; i++){
    for (let j=i+1; j<=str.length; j++){
        var sub = str.substring(i,j);
        if (isUniqueSubString(sub)){
            if (sub.length > longest.length){
                longest = sub
            }
        }
    }
}

console.log("Longest Substring is "+ longest);