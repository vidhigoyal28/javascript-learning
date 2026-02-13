//Immediately Invoked Function Expression(IIFE)
// function one(){
//     console.log(`DB CONNECTED`)
// }
// one()


(function one(){
    console.log(`DB CONNCTED`)
})(); //IIFE - outer parenthesis important to execute by ()
//IIFE - functions executed immediately (sometimes global scope pollution causes problem sometimes so to remove that problem we use iife)
//to executr another iife we need to end first iife with semicolon
(function one(){
    console.log(`DB 2 CONNCTED`)
})()  ;


( (name) => {
    console.log(`DB 2 CONNCTED ${name}`)
})(`Vidhi`)  // arrow function also allowed (parameter passing)