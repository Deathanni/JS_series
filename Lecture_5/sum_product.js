let num=prompt("enter a number");
let str=[];
for(let i=1;i<=num;i++){
    str.push(i);
}

console.log(str);

let sum=str.reduce((start,end) => start+end,0);
console.log(sum);

let mul=str.reduce((start,end) => start*end,1);
console.log(mul);