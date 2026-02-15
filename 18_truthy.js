//const userEmail = "vidhi@mail.com"
//const userEmail = "" //false
const userEmail = [] //true ,treat empty array as true
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email")
}

//Falsy Values
//false , 0 , -0, BigInt 0n ,"" , null , undefined, NaN

//Truthy Values
// "0" ,'false, " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}
if(Object.keys(emptyObj).length ===0){
    console.log("Object is empty");
}
// false == 0 -> true
// false ==  -> true
// 0 == '' -> true

/*
//Nullish Coalescing Operator(??): null undefined
let val1;
//val1 = 5 ?? 10 //assign first value
//val1 = null ?? 10 //in case of null & undefined it assign other value
//val1 = undefined ?? 15
//val1 = null ?? undefined // undefined
val1 = null ?? 10 ?? 20 //assign first value -> 10
console.log(val1);
*/


//Terniary Operator
//condition ? true : false
const icePrice = 100
icePrice <= 80 ? console.log("less than 80"): console.log("more than 80")

