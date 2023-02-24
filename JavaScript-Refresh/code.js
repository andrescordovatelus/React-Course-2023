
var hola;
let holaaa;
const hello = "english";
console.log(hello);

//Normal Function
function myFunc(){
    console.log("this is not a row function");
}

//Arrow function
const myrowFun = () => {
    console.log("THIS IS A ROW FUNCTION");
}

//Arrow function receiving two parameters and return the response
const multiplyE = (n1, n2) => console.log("the multiply is: " + n1*n2);

myFunc();
myrowFun();
multiplyE(2,3);

//Spread Operatorss
const numbers = [1,2,3];
const newNumbers = [...numbers, 4];

console.log(numbers);
console.log(newNumbers);

//Rest Operator
const filter = (...args) => {
    return args.filter(el => el == 1);
}

console.log(filter(1,2,3));

[num1, num2] = numbers;
console.log(num1, num2);

//Arrays
const doubleNumArray = numbers.map((num) => {
    console.log(num)
});