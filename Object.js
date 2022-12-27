//OBJECT METHODS IN JAVASCRIPT

let obj = {
  ename: "shyam",
  age: 27,
};
console.log(Object.keys(obj)); //!OBJECT KEYS
console.log(Object.values(obj)); //! 2  Values
console.log(Object.entries(obj)); //! 3   Entries

//!  4.Object.seal

let obj1 = {
  name: "aishu",
  age: 32,
};
console.log(obj1);
let obj2 = Object.seal(obj1);
obj1.name = "keerthy";
console.log(obj1);
console.log(Object.isSealed(obj1)); //returns boolean

//! 5 .Object.Freeze

let obj3 = {
  Nname: "rithu",
  age: 25,
};
console.log(Object.freeze(obj3));
obj3.Nname = "rashmika";
console.log(obj3);
console.log(Object.isFrozen(obj3));

//! 6 Object .assign()

let obj4 = {
  eName: "meghuz",
  age: 27,
};

let obj5 = {
  f: "biriyani",
};
console.log(Object.assign(obj5, obj4));
console.log(obj4);
console.log(obj5);

let obj6 = Object.assign({}, obj4);

// ! 7  Object .Create

let obj7 = {
  empName: "ali",
  age: 25,
};
console.log(Object.create(obj7));

//!8  Object.defineProperties

const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});

console.log(object1.property1);

//!9  Object.hasOwnProperty
let obj8 = {
  1: "a",
  2: "b",
};
console.log(obj8.hasOwnProperty("1"));
console.log(obj8.hasOwnProperty(1));

//!  10 Object.is()
console.log(Object.is("hii", "hii"));
console.log(Object.is("123", "123"));
 
//! 11 Object toString()
let a = ["dfghjk","ASDFGHJKL"]
console.log(a.toString());



function MyNumberType(n) {
  this.number = n;
}

MyNumberType.prototype.valueOf = function() {
  return this.number;
};

const object01 = new MyNumberType(4);
console.log(typeof object01);

console.log(object01 + 3);
// expected output: 7


// !12  Object.ValueOF
let object3 = {
    eName: "Samyukutha",
    age:29
    
}
console.log(object3);

console.log(String.valueOf(object3)==object3)


// !Object isFromEntries









