console.log("here we will calculate the discounted price");
let marks=[];
let item=parseInt(prompt("How many number item you took"));

for(let i=0;i<item;i++){
    marks[i]=parseInt(prompt(`Enter item ${i+1}`));
}

console.log(marks);

console.log("Items after 25% discount are :");
for(let i=0;i<item;i++){
    marks[i]= marks[i] = marks[i] * 0.75;
}
console.log(marks)



