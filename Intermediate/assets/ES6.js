let contactNo = [9820,9851,9855,9876]
// for( let i=0; i<contactNo.length; i++){ 
//     contactNo[i] = "+91" + contactNo[i];
//     contactNo[i] = parseInt(contactNo[i]);
// }
//     console.log(contactNo)

    // or

    const contact = (contactNo.map(value, index)) => {
        console.log(value,index);
        return "+91"+ value;
    };
    console.log(contact, contactNo)