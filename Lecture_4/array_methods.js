console.log("Here i will study Array Methods");

let arr=["Toni","Moni","Boni","Roni","Johni"];
console.log(arr);

arr.push("Soniya");
console.log(arr);
arr.unshift("Priya");
console.log(arr);

console.log(arr.toString());

let arr1=["Mango","Apple","Guava","Watermelon","Cherry","Pears",];
console.log(arr1);

let con=arr.concat(arr1)
console.log(con);

con.pop();
console.log(con);

con.pop();
con.pop();
con.pop();
con.pop();
con.pop();
console.log(con);

con.shift();
console.log(con);

let sli_ce=con.slice(2,4);
console.log(sli_ce);

con.splice(2,4)
console.log(con);




