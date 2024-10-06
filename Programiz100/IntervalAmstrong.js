// JavaScript Program to Find Armstrong Number in an Interval

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
        'Amstrong '+orignal : 'Not Amstrong '+orignal
    );
}


const number = 153;
for (let i = 1; i<=number; i++){
    amstrong(i);
}