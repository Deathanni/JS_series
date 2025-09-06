console.log("Here in this program i will display the grades of teh students as per their marks");
const marks=prompt("Enter your marks out of 100:");

if(marks>=90 && marks<+100){
    console.log("Your grade is : A+")
}
else if(marks>=80 && marks<90){
    console.log("Your grade is : A")
}
else if(marks>=70 && marks<80){
    console.log("Your grade is : B+")
}
else if(marks>=60 && marks<70){
    console.log("Your grade is : B")
}
else if(marks>=50 && marks<60){
    console.log("Your grade is : C")
}
else if(marks>=40 && marks<50){
    console.log("Your grade is : D")
}
else{
    console.log("Your grade is : F")
}