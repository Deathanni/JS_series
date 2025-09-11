let arr=["Apple","Banana","fig","Grapes","jack_fruit","lemon","mango","orange","Pears","strawberry"];
arr.push("cherry");
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift("Apricot");
console.log(arr);

console.log(arr.includes("Banana"));
console.log(arr.includes("pumkin"));

console.log(arr.indexOf("lemon"));

let arr1=["carrot", "raddish","brinjal"];
let c=arr.concat(arr1);
console.log(c);

console.log(c.slice(1, 3));
c.splice(1,1,"Olive");
console.log(c);

let nums = [1, 2, 3];
nums.forEach(n => console.log(n * 2));

//map create a new array
let m=[10,11,12,13,14]
let square=m.map(n => n*n);
console.log(square);

//filter create a new arrau
let even=m.filter(n => n%2==0);
console.log(even);

//reduce acc=start with liek 0 here and curr=start with first element;
let sum_num=[5,1,2];
let sum=sum_num.reduce((start,firsrtElement)=> start+firsrtElement,0)
console.log(sum)

let short=[100,30,40,99,101,22]
let shorted=short.sort((a,b)=>a-b);
console.log(shorted)

let shorted_1=short.sort((a,b)=>b-a);
console.log(shorted_1)






