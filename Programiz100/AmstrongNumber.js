// JavaScript Program to Check Armstrong Number

const mul = (num, len)=>{
    let res = 1;
    for (let i = 1; i<=len; i++){
        res *= num
    }
    return res;
}

const amstrong = (num)=>{
    let orignal = num;
    let len = String(num).length;
    let result = 0;
    while (num!=0){
        let last = num%10;
        result += mul(last, len);
        num = Math.floor(num/10)
    }
    console.log(
        (orignal===result)?
        'Amstrong' : 'Not Amstrong'
    );
}


const number = 153;
amstrong(number);