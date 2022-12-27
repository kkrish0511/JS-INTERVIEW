//! 1String.at   //finds the index position


const sentence = 'The quick brown fox jumps over the lazy dog.';

let index = 5;

console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);


index = -4;

console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`)


//! 2 charAt;
let a = "hello world"
console.log(a.charAt(4))


// !3 charCodeAt

console.log(a.charCodeAt(2));


// !4 String.prototype.codePointAt()
// !The codePointAt() method returns a non-negative integer that is the Unicode code point value at the given position. Note that this function does not give the nth code point in a string, but the code point starting at the specified string index.

const icons = '☃★♲(☞ﾟヮﾟ)☞ऑ';

console.log(icons.codePointAt(1));


//!5 concat();
const str1 = "Hello";
const str2 = "World";

console.log(str1.concat(" ", str2)); 

// !6String.prototype.endsWith()
// The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

const str3 = 'Cats are the best!';

console.log(str3.endsWith('best!'));

// !7String.fromCharCode()
// The static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.

console.log(String.fromCharCode(189, 43, 190, 61));

// !8String.prototype.lastIndexOf()
//The lastIndexOf() method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the last occurrence of the specified substring. Given a second argument: a number, the method returns the last occurrence of the specified substring at an index less than or equal to the specified number

const paragraph = 'The quick brown fox jumps over';

console.log(paragraph.lastIndexOf("e"))

// !9 slice

let aa = "shashi"
let ar = aa.slice(0, 3)
console.log(ar);

//! 10 SUBSTRING

// similar to slice but does not take negative values


//! 11 replace
// it is case sensitive
let ra = "who is captain cool who"
let rra = ra.replace(/who/g, "MSD")    // can change globally
console.log(rra);

//! 12 trim , trim start, trim end

// removes the spaces

let g = "  aishu";
console.log(g.length);
let rg = g.trimStart()
console.log(rg);
console.log(rg.length);

//! 13 includes
// boolean output

let ff = "kalyani"
let ff1 = ff.includes("y")
console.log(ff1);

//! 14 starts with

const str11 = "Saturday night plans";

console.log(str11.startsWith("Sat"));
//  true

console.log(str11.startsWith("Sat", 3));

//! 15 indexof

let i = "how chombu u are"
let ii = i.includes("m",8)
console.log(ii);

//! 16 repeat

let rq = "dont forget the name MSD"
let rrq = rq.repeat(7)
console.log(rrq);   

//! 17 match

// returns array 
let m = "kerthana"
let mm = m.match("r")
console.log(mm);

// !18 to local lower case
let l = "IndiA"
let ll = l.toLocaleLowerCase()
console.log(ll);

//! 19 toLocaleUppercase
let uu = l.toLocaleUpperCase()
console.log(uu)

//! pad start

let p = "megha"
console.log(p.length);
let pp = p.padStart()
console.log(pp);
console.log(pp.length);


