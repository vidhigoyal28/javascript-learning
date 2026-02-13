/*if(true){
let a = 10
const b =20
var c = 30
console.log("Inner:",a) //ans = 10
}
let a = 100 

console.log(a) //l- ans = 100
//console.log(b) - not defined
//console.log(c) - ans =30
   */
/* 

//Nested

function one(){
    const username = "Vidhi"
    function two(){
        const website = "youtube"
        console.log(username) 

    }
   // console.log(website) //error - website not definedk
    two() //without this no output will be there as two is not called
}
one() //without this no output will be there as one is not called



*/
/*
if(true){
    const username = "Vidhi"
    if(username === "Vidhi"){
        const website = "youtube"
        console.log(username + " " + website) //ans = Vidhi youtube
}
//console.log(website) //error - website not defined(scope of website is only inside if block)
}
//console.log(username) //error - username not defined(scope of username is only inside if block)

*/

//++++++++++++++++++++++interesting example+++++++++++++++++++++++

console.log(addone(5)) //gives 6 without error
function addone(num){
    return num + 1
}
addone(5) //returns 6 but we are not storing it anywhere so it will not be printed


//console.log(addTwo(5)) //error - no access to addTwo
const addTwo = function(num){
    return num + 2
}
addTwo(5) //returns 7 but we are not storing it anywhere so it will not be printedkk