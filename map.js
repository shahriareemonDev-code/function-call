 //double hisebe pete hole koronio
 const numbers = [1,2,3,4,5,6];

//  const doubled = [];
//  for(const num of numbers) {
//     doubled.push(num*2);
//  }
const doubled = numbers.map(num=> num*2);
const squared = numbers.map(num=> num*num);

const friends = ['zaved', 'khaled', 'sajed', 'naved', 'sakib']
const firstLetter = friends.map(frnd=> frnd[0])

const products = [
    {name:'laptop', price:55000},
    {name:'tab', price:35000},
    {name:'pc', price:65000},
    {name:'mobile', price:45000}
];
const prices = products.map(pd=> pd.price*2);

const names = products.map((pd,index,productsArray)=> {
    const upperCaseName = pd.name.toUpperCase();
    console.log(index,upperCaseName,productsArray);
    return upperCaseName;
})
 
 console.log(doubled,squared,firstLetter,prices,names)