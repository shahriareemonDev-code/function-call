let pi = 5;
add(10,10);
//add function ta holo global function//
function add (a,b) {
    const factor = 5;
    const result = (a + b) * factor + pi;
    const total = add2(result);
    const value = add3(total);

    function add3(num3) {
        num3 = num3 + pi;
        return num3 * pi;
        
    }
    // return result;
   console.log(value)
}
// add(10,10)
//global function er output oky


 

//add function ta holo global function//
function add2 (num) {
    return num + 2;
    // return result;
}


//new line function
const multiply = (a,b) => {
return a*b;
}
const value = multiply(5,5);
console.log(value)


function printFruits(fruits){
    for(let fruit of fruits){
        console.log(fruit);
    }
}

let fruits = ["apple","banana","mango"];
printFruits(fruits);