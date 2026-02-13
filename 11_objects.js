//singleton
//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = '123abc'
tinderUser.name = 'John'
tinderUser.isLoggedIn = false
//console.log(tinderUser)
//object inside object
const regularUser = {
    email: "vidhi@example.com",
    fullname: {
        userfullname: {
        firstname: "Vidhi",
        lastname: "Goyal"
    }
}
}
//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userfullname);
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}
const obj4 = {5: "e" , 6: "f"}
//const obj3 = {obj1, obj2}
//const obj3 = Object.assign(obj1, obj2)
//const obj3 = Object.assign({}, obj1, obj2, obj4) //to avoid mutation of obj1 and obj2 (best practice)
const obj3 = {...obj1, ...obj2, ...obj4} //spread operator (mostly used)
//console.log(obj3)


const users = [
    {
        id: 1,
        email: "v@gmail.com"
    },
    {
        id: 2,
        email: "g@gmail.com"
    },
    {
        id: 3,
        email: "s@gmail.com"
    }
]
users[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser)) //to get all the keys of an object in an array
// console.log(Object.values(tinderUser)) //to get all the values of an object in an array 
// console.log(Object.entries(tinderUser)) //to get all the key value pairs of an object in an array of arrays 
// console.log(tinderUser.hasOwnProperty('isLoggedIn')) //to check if a key is present in an object or not (returns true or false)

//Destructuring of objects
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "vidhi goyal"
}
//course.courseInstructor
const {courseInstructor} = course //destructuring of objects (to extract a value from an object and store it in a variable)
console.log(courseInstructor)

// const navbar = ({company}) =>{

// }
// navbar(company = "hitesh")

//Json - JavaScript Object Notation
