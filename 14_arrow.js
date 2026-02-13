/*
const user ={
    username : "Vidhi",
    price: 99,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "goyal"
// user.welcomeMessage() //ans - goyal 

//console.log(this) // ans - {} as it refer to empty context
*/



/*
// function one(){
//     let username ="Vidhi"
//     //console.log(this) // return many values i.e about environment
//     console.log(this.username); // ans - undefined
// }
// one()

*/
/*
//arrow function
const chai = () => {
    let username ="Vidhi"
     //console.log(this) //ans - {}
     //console.log(this.username); // ans - undefined
 }
chai()
*/

// const addTwo = (num1 ,num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(3,4))

//implicit return  -> without using return keyword
//const addTwo = (num1 ,num2) => num1 + num2
//const addTwo = (num1 ,num2) =>  (num1 + num2)

//const addTwo = (num1 ,num2) => {username: "Vidhi"} ->undefined
const addTwo = (num1 ,num2) => ({username: "Vidhi"}) //{username: 'Vidhi'} (parenthesis is important)
console.log(addTwo(3,4))