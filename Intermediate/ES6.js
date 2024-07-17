// 1. add +91 to each 

let contactNo = [9820, 9851, 9855, 9876];
// for( let i=0; i<contactNo.length; i++){ 
//     contactNo[i] = "+91" + contactNo[i];
//     contactNo[i] = parseInt(contactNo[i]);
// }
//     console.log(contactNo)

// or

// const contact = contactNo.map((value, index)=>{
//     console.log(value,index);
//     return "+91"+ value;
// });
// console.log(contact, contactNo)

// //2. capitalise first letter in array
const names = ["sheela","saroj","neha","meera"]
// const capName = names.map(names)=>{
//     // console.log(value,index);
//     return names.charAt(0).toUpperCase() + names.slice()
// })
// console.log(capName)


// 3.take array of number make them string
for (let i = 0; i < contactNo.length; i++) {
    const numCoverter = contactNo.toString(i);
    console.log(numCoverter)
}

//4. take array and multiply with 3
let array = [3, 4, 5, 6]
for (let i = 0; i < array.length; i++) {
    let multiply = array.forEach((value) => {
        return 3 * array[i];
        console.log(multiply, array)
    })
}
