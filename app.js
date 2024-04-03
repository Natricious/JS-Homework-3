function sum(a, b) {
    if (a > b) {
        return a - b;
    }
    return a + b;
}

function multi(a, b) {
    return a * b;
}

console.log(sum(2, 3));
console.log(multi(10, 3))


((a, b) => console.log(a ** b))(5, 3)


//arrow function
const arrow = (a, b) => {
    return (a ** b)
}
console.log(arrow(2, 5))


//arrow functino (მოკლე ვარიანტი, როცა პატარა მოქმედება ხდება)
const arrow2 = (a, b) => a ** b;

console.log(arrow2(2, 5));



// arguments
function sum(a, b) {
    console.log(arguments[4]);
    return a + b;
}
console.log(sum(10, 11, 15, 20, 25));

//arguments in expression function
const multi = function (a, b) {
    console.log(arguments);

    return a * b;
}

multi(1, 2, 3);
multi();


//arguments in arrow function (არ მუშაობს)

const arr0w = (a, b) => {
    console.log(arguments);

    return a ** b;
}
arr0w(1, 2, 3, 4, 5);



//spread operator
const array = [1, 2, 4, 3, 6];
const array2 = []; // [...array]

array2.push(...array);


console.log(array);
console.log(array2);


//spread in function
function sum(a, b, ...others) //...others aris array 
{
    console.log(a, b, others);
}
sum(1, 2, 3, 4, 5, 6)

//massive in function + sum
function sum1(...others) //...others aris array 
{
    console.log(others);
    let count = 0;
    for (let item of others) {
        count += item;
    }
    return count;
}
console.log(sum1(1, 2, 3, 4, 5, 6));

//
function person(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
}
const user1 = person ('Zura', 'Natroshvili', 30)
const user2 = person ('ggg', 'sdfeer', 30)
const name = person ('Zura', 'Natroshvili', 30)['firstName']
console.log(name)
console.log(user1)
console.log(person('Zura', 'Natroshvili', 30))





const arr = [1,2,3,4,5,4,3,4];
let counter = 0;
arr.forEach((item) =>  {
    counter += item;
    console.log(item)
});
console.log(counter);