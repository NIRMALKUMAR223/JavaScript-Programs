// occurence in string

const str = 'helloworld';
const counted = new Set();

for (let i=0; i<str.length; i++){
    let count = 0;
    for (let j=0; j<str.length; j++){
        
        // it return false we intensely make it true 
        // if it is true that element is already counted  so no need to count it again 
        if(!counted.has(str.charAt(i))){
            if (str.charAt(i)==str.charAt(j)){
                count++;
            }
        }
    }

    if(count!=0){
        console.log(str.charAt(i)+" : "+ count);
        counted.add(str.charAt(i));
    }
    
}