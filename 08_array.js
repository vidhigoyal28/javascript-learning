const myarr = [1,2,3,4,5]
console.log(myarr[0])
//array methods
myarr.push(6)
myarr.push(7)//adds element at the end of the array
console.log(myarr)
myarr.pop() //removes the last element of the array
console.log(myarr)
//arr.unshift(9) //add element at the beginning of the array
//console.log(myarr)
//arr.shift() //removes the first element of the array
//console.log(myarr)
const newarr = myarr.join() //converts array to string
console.log(newarr)
console.log(typeof newarr)
//slice and splice
const myn1 = myarr.slice(1,3)           //returns a new array from the original array from index 1to 2
console.log(myn1)
console.log(myarr)
const myn2 = myarr.splice(1,3)          //removes elements from the original array from index 1 to 3 and returns the removed elements as a new array
console.log(myn2)
console.log(myarr)