const price = 71;
const productPrice = "emon" + price;
console.log(productPrice)

const mines = (a,b) => a-b;
const result = (50-10);
console.log(result)

const arr1 = [2,3,4,5];
const arr2 = arr1;
arr2.push(10);
console.log(arr1)
console.log(arr2)

//not same
const arr3 = [2,3,4,5];
const arr4 = [...arr3,55];
// arr4.push(10);
console.log(arr3)
console.log(arr4)