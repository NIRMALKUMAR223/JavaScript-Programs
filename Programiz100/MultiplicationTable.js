// JavaScript Program to Display the Multiplication Table

const multiplicationTable = (num)=>{
    for (let i = 1; i<=10; i++){
        console.log(
            (String(i).length===1)?
            ` ${i} * ${num} = `+ (num*i) : `${i} * ${num} = `+ (num*i)
        );
    }
}

const number = 5;
multiplicationTable(number)