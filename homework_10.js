//1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს

function numbers(m, n) {
    if (m > n) {
        return m;
    } else if (m < n) {
        return n;
    } else return 0;
}
console.log(numbers(4, 5));

//2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი

function sum(a, b) {
    return a + b;
}
console.log(sum(2, 7));

//3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)

function myName() {
    let name = 'Zura Natroshvili';
    console.log(name);
}
myName()

//4. დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)

function flName(firstname, lastname) {
    return firstname + lastname;
}
console.log(flName('Zura ', 'Natroshvili'));

//5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. Პ.ს. Უნდა გამოიყენოთ თქვენთვის სასურველი ციკლი)

function func(n) {
    let multi = 1;
    for (var i = 1; i < n; i++) {
        multi *= i;
    }
    return multi;
}
console.log(func(5));

//6. დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)

let obj = {
    firstname: 'Zura',
    lastname: 'Natroshvili',
    age: 30,
    scores: [4, 7, 5, 3, 2],
    myMethod() {
        console.log(this.firstname + ' ' + this.lastname);
    }
}
obj.myMethod();

//7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს

let object = {
    firstname: 'Zura',
    lastname: 'Natroshvili',
    age: 30,
    scores: [4, 7, 5, 3, 2],
}


function scoresSum() {
    let sum = 0;
    for (let i of object.scores) {
        sum += i;
    }
    return sum;
}
console.log(scoresSum());

//8. დაბეჭდეთ სტუდენტის სახელი და ასაკი

let obj2 = {
    firstname: 'Zura',
    lastname: 'Natroshvili',
    age: 30,
    scores: [4, 7, 5, 3, 2],
    myMethod() {
        console.log(this.firstname);
        console.log(this.age);
    }
}
obj2.myMethod();