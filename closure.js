function outerFunction () {
    function innerFunction () {
        console.log('This is inner function');
    }
    return innerFunction;
}

const result = outerFunction();
// result()
// console.log('This is outside', output)

function counter () {
    let count = 0;
    function increment() {
        count = count + 1;
        console.log('value of count',count)
    }
    return increment;
}
const count1 = counter()
//  console.log(count1)
count1()
count1()
count1()
count1()