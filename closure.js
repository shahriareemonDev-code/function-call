function outerFunction () {
    function innerFunction () {
        console.log('This is inner function');
    }
    return innerFunction;
}

const result = outerFunction();
// result()
// console.log('This is outside', output)

function counter (owner) {
    let count = 0;
    function increment() {
        count = count + 1;
        console.log('value of count',owner ,count)
    }
    return increment;
}
const count1 = counter()
//  console.log(count1)
// count1()
// count1()
// count1()
// count1()

const emonCounter = counter('Emon');
emonCounter()
emonCounter()
emonCounter()
emonCounter()
emonCounter()
emonCounter()
emonCounter()

const mamunCounter = counter('Mamun');
mamunCounter()
mamunCounter()
mamunCounter()
mamunCounter()