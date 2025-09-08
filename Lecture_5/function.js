//Basic function
function Print(b) {
    console.log(b);
}
Print("Meao");

//Parameterized function
console.log("Here i will print 2 numbers sum");
function sum(a,b) {
    return a+b;
}
let d=sum(10,20);
console.log(d);


// Arrow functinon
let a=10;
let b=10;

const multiply=(a,b)=> {
    console.log(a*b);
}
multiply(a,b);

const add=(a,b)=>{
    console.log(a+b);
}
add(a,b);

//Arrow function without parameters

const print=()=>{
    console.log("hello Ananya!")
}
print();

