// nth prime

function find(number){
    var result = 0;
    let value =2;
    const prime = (num)=>{
        if(num<=1){
            return false;
        }
        for (let j =2; j<=num/2; j++){
            if(num%j==0){
                return false;
            }
        }
        return true;
    }
    while(result<number){
        if(prime(value)){
            result++;
        }
        value++;
    }
    console.log(value-1);
    
}

const number = 10;
find(number);