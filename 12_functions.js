//function - a block of code designed to perform a particular task.
function myName(){
    console.log("V")
    console.log("I")
    console.log("D")
    console.log("H")
    console.log("I")
}
//myName() //function call or function invocation

function addTwoNumbers(num1, num2){ //parameters
    console.log(num1 + num2)
}
// addTwoNumbers(5, 10) //arguments
// addTwoNumbers(3 , "4") //ans - 34
// addTwoNumbers(3 , "a")
// addTwoNumbers(3 , null)
// const result = addTwoNumbers(3 , 5)
// console.log("result: " ,result) //undefined - because we are not returning anything from the function


/*function addTwoNumbersReturn(num1, num2){
     let result = num1 + num2
     return result
}
const result2 = addTwoNumbersReturn(3 , 5)
console.log("result2: " ,result2) //8
*/



/*function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("vidhi")) //ans - vidhi just logged in
console.log(loginUserMessage("")) //ans - just logged in
console.log(loginUserMessage()) //undefined just logged in
*/

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter username");
//         return
//     }
//     return `${username} just logged in`
// }
//console.log(loginUserMessage()) //ans - Please enter username and undefined returned


// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(100)) //ans - 100


//my cart can has more products so we use rest operator
// function calculateCartPrice(num1 , num2 ,...prices){
//     return prices
// }
// console.log(calculateCartPrice(100, 200, 300, 400)) //ans -[300, 400]


const user ={
    username : "vidhi",
    price : 500
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username: "xyz",
    price: 422
})

const myNewArray = [200 , 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray)) //ans - 400