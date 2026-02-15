//if
/*
syntax
if(condition){
                 (if condition true then only inner code will be executed otherwise not)
 }
*/
// <, >, <=, >=, ==, !=, === ,!==



/*
const temp =61
if(temp < 50){
    console.log("temp less than 50");
}
else{
    console.log("temp  more than 50");
}
console.log("Execute") //will always execute
*/



/*
const score = 200
if(score >100){
    const power = "fly" //scope of power in this block only(if we use var it will be accessible outside also but it is wrong)
    console.log(`user power: ${power}`);
}
//console.log(`user power: ${power}`); //error -  power is not defined 
*/


const balance = 1000
/*
if(balance > 500) console.log("test") , console.log("test2"); //scope remains same but it should be avoided
*/
/*
if(balance < 500){
    console.log("less than 500");
}
else if(balance < 750){
    console.log("less than 750");
}
else if(balance < 900){
    console.log("less than 900");
}
else{
    console.log("greater");
}
    */


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard ){ //both condition should be true
    console.log("Allowed");
}
if( loggedInFromGoogle || loggedInFromEmail){ //any one or both should be true
    console.log("Use logged in");
}