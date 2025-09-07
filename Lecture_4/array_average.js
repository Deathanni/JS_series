console.log("here we will take out the average of marks");

console.log("How many subject");
let subject=prompt("How many subject :");
let sum=0;
let marks=[];

for(let i=0;i<subject;i++){
    marks[i]=parseInt(prompt("Enter marks in"+i+1+"subject"));
    sum+=marks[i];
}

let average=sum/subject;
console.log(`The average marks are : ${average}`);

