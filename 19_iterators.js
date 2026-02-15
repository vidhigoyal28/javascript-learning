//for
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }
//console.log(element); //error - as scope inside block


/*
//nested loop
for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j= 0; j<=10; j++) {
        console.log(`Inner loop value ${j} and inner loop value ${i}`)
        
    }
    
}
    */


// let myarr = ["flash" , "batman" , "superman"]
// console.log(myarr.length)
// for(let i = 0 ; i< myarr.length; i++){
//     const element = myarr[i];
//     console.log(element)
// }


//break and continue
// for(let index =1 ;index <= 20;index++){
//     if(index == 5){
//         console.log(`Detected 5`);
//         break //skip all other statements
//     }
//     console.log(`Value of i is ${index}`)
// }


for(let index =1 ;index <= 20;index++){
    if(index == 5){
        console.log(`Detected 5`);
        continue //skip next statement 
    }
    console.log(`Value of i is ${index}`)
}