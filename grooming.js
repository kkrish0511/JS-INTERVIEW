// function area(l) {
//    return function c(b) {
//         return function f(h) {
//             return l * b * h;
//         }
//     }
// }

// console.log(area(5)(5)(5));

// function m() {
//     console.log("shyam")
//     m();
// }
// m()

// function flatten(arr, result = []) {
//     for (let i = 0, length = arr.length; i < length; i++) {
//         let Value = arr[i];
//         if (Array.isArray(Value)) {
//          let a =  flatten(Value, result)
//         } else {
//             result.push(Value)
//         }

//     }
//     return result;
// }

// console.log(flatten([1,"krishna", 2, 3, 4, [[[[[[[5,7,[77,[67899]]]]]]]]]]));

// let x = [["shashi"]]
// let y = ["manu",["shashi", [[[[["Dixith"]]]]]]]
// let mergeValue = x.concat(y)
// console.log(mergeValue);

// let mergeValuetoString = mergeValue.toString();
// console.log(mergeValuetoString)

// let mergeValueSplit=mergeValuetoString.split(",")
// console.log(mergeValueSplit);

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9,"strawberry","blueberry"]

// let res = array.forEach((val,i) => {
//     console.log(val,i);
// })

//!using map method

// let resArray = array.map(val => {
//     console.log(val + "chomburaj");
// })

// console.log(resArray);

// using filter

// let res2 = array.filter((val12) => {
//     return val12 >1
// })

// console.log(res2);

// !------Reduce method-----without initial value-----------

let arr = [10, 12, 2122, 1223123, 6767];

let red = arr.reduce((a, b) => {
  return a + b;
});

console.log(red);

let str = ["i", "s", "h", "u"];
let res7 = str.reduce((a, l) => {
  return a + l;
}, "a");
console.log(res7);

// ---- reduce right-------------------

let arr2 = [2, 56, 6, 7];
let c = arr2.reduceRight((a, l) => {
  return a + l;
});

console.log(c);

// !average using reduce method

let ar = [1, 2, 3, 4, 5];
let avgAr = ar.reduce((a, b) => a + b) / ar.length;
console.log(avgAr);

//!--------------with initial value--------------

let arr3 = [7, 7, 8, 9, 9, 4];

let res = arr3.reduce((a, l) => {
  return a + l;
}, 5);

console.log(res);

let arr5 = [6, 7, 8, 3, 4, 9, 2];

let res1 = arr5.reduceRight((a, l) => {
  return a + l;
}, 10);

console.log(res1);

let str2 = ["y", "h", "t", "r", "e", "e"];
let res17 = str2.reduceRight((a, l) => {
  return a + l;
}, "k");

console.log(res17);

//!=============================================//
const a = ["1", "2", "3", "4", "5"];
const left = a.reduce((prev, cur) => prev + cur);
const right = a.reduceRight((prev, cur) => prev + cur);

console.log(left);
console.log(right);

// !------------------find -------------------

let findarr = [1, 5, 6, 55, 66, 77, 88, 99];
let resfind = findarr.find(val => {
  return val > 99;
});

console.log(resfind); // -1

//!findIndex of

let index = [2, 4, 8, 1, 4, 5];
let findIndex = index.findIndex(element => {
  return element % 2 !== 0;
});
console.log(findIndex);

// !------------------some-----------------------------

let j = [1, 53, 4, 6, 87, 43, 46];
let jj = j.some(val => val > 86);
let ff = j.some(val => val > 88);

console.log(jj); //true
console.log(ff); //false

// !ARRAY .EVERY()//
let everyArray = [2, 4, 6, 8, 10];
let arrayEvery = everyArray.every(val => val % 2 == 0);
console.log(arrayEvery);

let odd = [3, 5, 7, 9, 11, 14];
let oddArray = odd.every(val => val % 2 !== 0);
console.log(oddArray);

// ! Array .Values
let arrayV = [1, 2, 3, 4, 5, 6];
// let v = arrayV.values();
// for (let value of v) {
//     console.log(value)
// }

//! last indexof and indexOf
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(animals.indexOf("Dodo"));

let str1 = [1, 2, 5, 3, 4, 5, 7];
console.log(str1.indexOf(5)); //2
let lastI = str1.lastIndexOf(5); //5
console.log(lastI);

console.log(animals.lastIndexOf("Tiger"));

//!index
let arrayKey = [1, 3, 5, 7, 9];
// for (let keys in arrayKey) {
//     console.log(keys)
// }
let newArr = arrayKey.keys();
console.log(newArr);
//!values
// for (let vkeys of arrayKey) {
//     console.log(vkeys)
// }

//!entries
// let array=[1,4,6,77,8,8,8,9,]
// array.forEach((element,i) => {
//     console.log(element,i)
// });

// !Array .keys
const array1 = ["a", "b", "c", "d"];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

//!Array.Values
const array2 = ["a", "b", "c"];
const iterator1 = array1.values();

for (const value of iterator1) {
  console.log(...value);
}

// !Array.Entries

const array12 = ["a", "b", "c"];

const iterator2 = array1.entries();

console.log(iterator2.next().value);

console.log(iterator2.next().value);

//


let arr10 = [11, 55, 66, 77, 66, 44, 33, 88,]
let resp = arr10.entries();
let resp1 = arr10.keys()
let resp2=arr10.values()
console.log(...resp)
console.log(...resp1)
console.log(...resp2)


