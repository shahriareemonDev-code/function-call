 function add(num1,num2) {
    console.log('arguments', arguments);
    const args = [...arguments];
    console.log(args)
    return num1 + num2
 }

 add(5,10,11,12,13,14,15)
