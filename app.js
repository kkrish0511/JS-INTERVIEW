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

//!26 Spread Operator
//spread  operator is used to spread the array and object elements
// it is used to merge of two arrays

//!27 What are the different data types in javascript

// Number, Boolean, String, Null, Undefined, BigInt, Symbol

//! 28 How can you create an Object in JavaScript

// let obj = {
//     name: "krishna",
//     id:123,
// }

// let obj1 = {
//     name: "kumar",
//     id: 22,
//     technologies: ["html", "css", "js", "react"],
//     preferences: {
//         name: "ali",
//         id:12,
//     }
// }
// console.log(obj1);

// !29 What is typeof operator in javascript

// var a = 10;//NUmber
// var a = "10";//String
// var a = null;//Null is an object
// var a = true;//boolean
// var a;//undefined
// console.log(typeof (a));
//!30 What is d/f b/w "==" and "===" Operators?

// let a = 10;
// let b = "10";
// if (a == b) {
//     console.log("Values are Matching");
// } else {
//     console.log("Values are not matching");
// }
// if (a === b) {
//   console.log("Values are Matching");
// } else {
//   console.log("Values are not matching");
// }

//!31  What would be the result of 13+6+"2"?
// console.log(13 + 6 + "2");//192
// console.log(13 + 6 + 2);//21

//!32  What do you mean by null in javascript
 let x = null;
 console.log(typeof (x));//object
console.log(x);//null
 
//!33 How do detect clients operating system
console.log(navigator.language);//en-US
console.log(navigator.onLine);//true
console.log(navigator.platform);//Win32

// !34  Of what Javascript type is an Array
// let a = [10, 20, 30];
// let b = ["10", "29"];
// let c={name:"Manu",id:12}
// console.log(typeof (a));//object
// console.log(typeof (b));//object
// console.log(typeof (c));//object

//!35  What property tells you the length of a Javascript array?

// let a = [10, 20, 30];
// let b = [1, 2, 3, 3, 4, 5];

// console.log(a.length);//3
// console.log(b.length);//6


//!36 What does array.shift() method returns

// let a = [10, 20, 30, 40];
// console.log(a.shift());//[10]
// console.log(a);//[10,20,30,40]

//!37 Explain Array.push() method
// let a = [10, 20, 30, 40];
// console.log(a.push(40, 50));
// console.log(a);// [10, 20, 30, 40, 40, 50]

//!38  Explain the Array.pop() method

// let a = [10, 20, 30, 40];
// console.log(a.pop());//40
// console.log(a);// [10, 20, 30]

//!39 Explain the Array.unshift() method

// let a = [10, 20, 30, 40];
// console.log(a.unshift(50));//5
// console.log(a);//[50, 10, 20, 30, 40]
// console.log(a.length);//5

//!40 Explain the template literals in ES6

// let a = 'krishna';
// let b = 'Kumar'
// let c = `${a}${b}`;
// console.log(c);//KrishnaKumar

//!41 What is the output of the following code sample

// var y = 1;
// if (function f() { }) {
//     y += typeof typeof f;//1string
//      y += typeof f;//1undefined
// }
// console.log(y);

//!42 What is NaN ? What is its type ?
// console.log(typeof NaN);//Number
// console.log(typeof "number");//string
// console.log(typeof NaN === "number");//true
`// console.log(typeof (NaN === "number"));//boolean
// console.log(NaN === "number");//false
// console.log(NaN == NaN);//false

//!43 What is the output of the following code sample

//The below 2 functions return the same output;

// function c() {
//     return {
//         name:"Krishna"
//     }
// }
// function d() {
//     return {
//         name: "Krishna"
//     }
// }
// console.log(c());//Krishna
// console.log(d());//Krishna

// //!or======

function c() {
    return
    {
    name:"krishna"
    }
}
function d() {
    return
    {
        name: "Krishna"
    }
}
console.log(c());
console.log(d());

//!44 What will the code below output

console.log(false == '0');//true
console.log(false === '0');//false

//!45 What's the output of below code

console.log(1 < 2 < 3);//true
console.log(3 > 2 > 1);//false

//!46. How do you clone an object

let test = {
    name: "Krishna",
    id: 12,
    salary:1000,
}
let task = {
    completed:"yes",
}
console.log(test)//{name: 'Krishna', id: 12, salary: 1000}

let testclone = Object.assign({}, test);
console.log(testclone)//{name: 'Krishna', id: 12, salary: 1000}

let testclone1 = Object.assign(task, test);
console.log(testclone1);//{completed: 'yes', name: 'Krishna', id: 12, salary: 1000}

//!47. Which keyword are used to handle the exceptions

// try {
    
// } catch (error) {
    
// }
// finally {
    
// }


//!48. What is variable typing

// let i = 2;//integer
// i = "krishna"//string
// i = true;//boolean
// console.log(i);

//!49. How are object properties are assigned

// let obj = {}

// obj.name = "Krishna";
// obj["lastname"] = "Kumar";

// console.log(obj);//{name: 'Krishna', lastname: 'Kumar'}

//!50. Is JavaScript is case sensitive

// Because inbuilt methods in Javascript
// getElementById
// getElementByClassName...... js is case sensitive`