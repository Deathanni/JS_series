let str="aneianouya";
let count=0;
const vowel=(str)=>{
    for(let char of str){
        if(char=='a' ||char=='e' ||char=='i' ||char=='o' ||char=='u'){
            console.log(char);
            count++
        }
    }
}
vowel(str);
console.log("The number of vowels in the string are :",count);