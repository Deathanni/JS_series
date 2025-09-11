let arr=[2,3,4,5,6,7,8,9];
arr.forEach(element => {
    console.log(element);
});

arr.forEach((element,index)=>{
    console.log("index "+index+" number = "+element+" Square is : "+element*element);
});

