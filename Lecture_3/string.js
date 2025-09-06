console.log("Here i will do strings");
let str="Ananya Biswas 25LPA as a fresher";
console.log(str);

let len=str.length;
console.log(`length of the string is : ${len}`)
str='Ananya Biswas have taken a big house from her own money';
len=str.length;
console.log(str);
console.log(`length of the string is : ${len} `)

console.log("My husband is\nupkar \t chaudhary")

//String indices
let b="happy me";
console.log(b[6], b[2],b[7]);

//Inbuild functions
let newstring ="UpKar ChauDhary";
console.log(newstring.toLowerCase());
console.log(newstring.toUpperCase());


let ab="  poke    mon     ";
console.log(ab);
console.log(ab.trim())
console.log(ab.split(" "));

let abc="Mera pyarra javascript mucachaa";
console.log(abc.slice(9))
console.log(abc.slice(2,19));

console.log(ab.concat(abc));
console.log(abc.charAt(6));