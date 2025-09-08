// Calculate number of vowel in a string
let str="ananya";
let count=0;

function vowel_check(str) {
    for(let char of str){
        if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u'){
            count++;
        }
    }
    return count;
}

vowel_check(str);
console.log(`Number of vowels: ${vowel_check(str)}`);