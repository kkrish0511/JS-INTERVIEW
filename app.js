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
},"")
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

// !7 How to sort the array of number?

let arr1 = [10, 4, 5, 2, 20, 70, 50, 30, 45, 1]
let sortArray = arr1.sort((a, b) => {
    return a - b;
})
console.log(sortArray);

// !8 How to sort array of strings//
let str = ["Shyam", "Krishna", "Praful", "Ali", "Chandru"]
console.log(str.sort());

//!9 How to find Unique value of array
let a = ["1", "1", "2", "3", "3", "1"];
let uniqueValue = [...new Set(a)]
console.log(uniqueValue);
//!10. How to find the unique value of sorted array?
let uniqueSort = [1, 2, 3, 5, 5, 4, 6, 4]
//  let result = uniqueSort
//    .reduce((a, x) => (a.includes(x) ? a : [...a, x]), [])
//     .sort();
//    console.log(result)
let sortedArray = uniqueSort.sort()
console.log([...new Set(sortedArray)]);

//!11To find max number of an array
let maxValue = [20, 45, 555, 777, 88, 33, 67]
let resultValue = Math.max(...maxValue)
console.log(resultValue);

//!12 To find min value in a numbered array;
let minValue = [20, 45, 555, 777,11,4,3,2, 88, 33, 67];
let minResult = Math.min(...minValue)
console.log(minResult)

//!13 how to find average of the number in given array.
let avgArray = [10, 20, 30, 40, 50]
let average = avgArray.reduce((a, b) => a + b) / avgArray.length;
console.log(average);   


//!14 how to get first letter of string to uppercase  to array
// let str1 = "yantra";  //string case
// let str2 = str1.charAt(0).toUpperCase() + str1.slice(1);
// console.log(str2);

let days = ["sun", "mon", "tue", "wed", "thurs", "fri", "sat"]
let upperCaseArray = [];
for (let day of days) {
    day = [day.charAt(0).toUpperCase() +day.substring(1)];
    upperCaseArray.push(day);
}
console.log(upperCaseArray)


  //!15how to join the character of an array
let joinOfArray = ["hello", "world"]
console.log(joinOfArray.join(""));

//!16 How to check if an array contains another elements of an array?
let oldId = [11, 22, 44, 55, 66, 77]
let newId = [33, 67, 25, 67]
let resultOfId = oldId.some(ele => newId.includes(ele));
console.log(resultOfId)

//!17how to check an anagram
// let str1 = prompt("enter the character")
// let str2 = prompt("enter second character")
// let str3 = [...str1].sort().join("")
// let str4 = [...str2].sort().join("")
// if (str3 === str4) {
//     console.log("is an anagram");
// } else {
//     console.log(" is not an anagram")
// }

// !18 To extract given fields in JSON and form a  new array 
let input = {
  "products": [
    {
      productId: "a01",
      uuid: "124748ba-6fc4f",
    },
    {
      productId: "b2",
      uuid: "1249b9ba-64d",
    },
    {
      productId: "c03",
      uuid: "124c78da-64",
    },
    {
      productId: "d04",
      uuid: "124ee9da-6",
    },
  ],
};

let op = input.products.map(item => item.productId);
console.log(op);

//!19to filter OF JSON file object
let obj = {
  "Students": [
    {
          "age": 27,
        "name":"Divin",
    
    },
    {
        "age": 22,
        "name":"Ali"
        
   
    },
        {
            "age": 20,
            "name": "cc"
        },
    
    {
            "age": 15,
            "name": "shyam",
        }
     
  ],
};

let filterObject = obj.Students.filter(fil => {
    return fil.age > 15 ? fil : "";
})
console.log(filterObject);

// !20 to check the entered value is array or not?
let isArray = [10, 20, 30, 40]
console.log(Array.isArray(isArray));

// !21to reverse the string
let reverse = "welcome"
console.log(reverse.split("").reverse().join(""));
 // !22 IIFE
    (function krish() {
        console.log("i am a bad boy");
})();
    
// !23 empty of an array
let empty = [10, 20, 30, 40];
console.log(empty.splice(4, 0));

//!24 to check entered value is palindrome or not
//  let strr = prompt("enter any string");
//  let sum = "";
//  for (let i = strr.length - 1; i >= 0; i--) {
//    sum += strr[i];
//  }
//  if (strr == sum) {
//    console.log("it is palindrome");
//  } else {
//    console.log("it is not palindrome");
//  }

// !25 Without affecting original array how to reverse?
const array3 = ["a", "b", "c"];

const reversed1 = array3.slice().reverse();
console.log(reversed1);