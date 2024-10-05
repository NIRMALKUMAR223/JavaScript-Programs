// sum of each char in a string

const letter = ['w','a','b','h','a','y','z','a'];
const count = {};
letter.forEach((item)=>{
    if (count[item]){
        count[item]+=1;
    }
    else{
        count[item]=1;
    }
})
console.log(count);