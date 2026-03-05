// function multiply ( a,b) {
//     a= a -5;
//     b= b -10;
//     console.log(a,b);
//     return(a*b);
// }
// let x = 10;
// let y= 20;
//  console.log('before calling', x,y)
// const result =  multiply(x,y);
// console.log(result)

function firstSum (arr1, arr2) {
    arr1[1] = 100;
    arr2[2] = 200;
    const first = arr1[1];
    const second = arr2[2];
}
const num1 = [1,2,3,4];
const num2 = [5,6,7,8]
console.log('before the funcion call', num1, num2)

const result = firstSum(num1,num2);
console.log('after the function call',num1,num2)
