//!1.how to declare a class constructor in javascript?
class emp{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    start() {
        console.log(`created the employee details of ${this.name} and age is  ${this.age}  `);
    }
}
let ali = new emp("ali", 26)
ali.start();


// !2.class inheritance method javascript.
//one object extending the properties of another class by using super key is called class inheritance;
// parent class


class car{
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    greet() {
        console.log(`the Car brand is ${this.brand} and the price is ${this.price}`)
    }
}

class newCar extends car{
    constructor(price, name) {
        console.log('buy a new car');
         super(price,this.brand)
    }
   
}
let c1 = new car("BMW", 9000000);
c1.greet();


//!3to remove the duplicate of an array
let duplicateArray = [10, 20, 30, 10, 30, 50, 60]
let originalArray = [...new Set(duplicateArray)]
console.log(originalArray);

// !4 to count the duplicate of an array
let arr = ["jan", "feb", "jan", "feb", "feb", "march"];
let count = arr.reduce((acc, value) => {
    return {...acc,[value]:(acc[value]||0)+1}
},{})
console.log(count);

//!5 to check the entered number is integer or not

let number = "5"
console.log(!isNaN(number))

//!6  difference between the const and freeze//
//const is binding the variables it is immutable cannot be re assign again;
//object .freeze(). it freeze the entire object and we can't add new key and value also we cannot update the  existing one also .it also immutable.
// const a = "ali"
// a = "chandru"
// console.log(a);

let employee= {
    ename:"shyam"
}
Object.freeze(employee);
employee.ename = "ali";
console.log(employee)

// !7 How to sort the array?

let arr1 = [10, 4, 5, 2, 20, 70, 50, 30, 45, 1]
let sortArray = arr1.sort((a, b) => {
    return a - b;
})
console.log(sortArray);

// !8

