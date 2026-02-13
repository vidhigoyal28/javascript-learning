// singleton
// object.create
// object literals 
const mySym = Symbol("key1");
const JsUser = {
    name : "Vidhi",
    mySym: "myKey",
    age: 22,
    location: "India",
    email: "hitesh@hitesh.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday", "Wednesday"]
}
console.log(JsUser.email); //accessing the property of an object
console.log(JsUser["email"]); //accessing the property of an object using square brackets
console.log(JsUser.mySym); 
console.log(typeof(JsUser.mySym)); //string type
JsUser.email = "hitesh@chatgpt.com"
console.log(JsUser.email); //updating the property of an object
//Object.freeze(JsUser) //after freeze changes will not be applicable although no error
//JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser)
//functions are treated as variable
JsUser.greeting = function(){
    console.log("Hello JsUser");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User ,${this.name}`); //this keyword is used to access the property of an object
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());