const name="nikhil"
const age=26

console.log(name + age) // bad practices

//string interpolation or string literals
console.log(`may name is ${name} and my age is ${age}`) //best practices

//another way to create string using object
const newString= new String("Vijay")

console.log(newString)
console.log(newString.__proto__)
console.log(newString[2])

console.log(newString.length)
// built in functions with string 
console.log(newString.toUpperCase())
console.log(newString.toLocaleUpperCase())
console.log(newString.toLowerCase())
console.log(newString.toLocaleLowerCase())
console.log(newString.charAt(1))
console.log(newString.charCodeAt(2)) //returns uncode value of character
console.log(newString.codePointAt(2)) //returns uncode value of character
console.log(newString.endsWith('y'))  //returns boolean value true/false
console.log(newString.startsWith('V'))  //returns boolean value true/false
console.log(newString.toLowerCase().startsWith('V'))  //returns boolean value true/false
console.log(newString.concat(" Nikam"))  //concat two strings
console.log(newString.includes('j'))  //return boolean true/false checks given value , it follows case sensitive  
console.log(newString.lastIndexOf('y'))  //return last index value before specified character
console.log(newString.indexOf('y')) // return index value of specified char
console.log(newString.match('Vijay')) //Matches the string "Vijay"
console.log([...newString.matchAll(/Vijay/g)]); // [Array Iterator with matches] Matches all occurrences of "Vijay" globally
console.log(newString.normalize())  //Normalizes the string using the default "NFC" form
console.log(newString.padEnd(10, '.')); // "Vijay....." Pads the string to a total length of 10 with trailing dots
console.log(newString.padStart(10, '.')); // ".....Vijay"  Pads the string to a total length of 10 with leading dots
console.log(newString.repeat(3)); // "VijayVijayVijay"   Repeats the string three times
console.log(newString.replace('Vijay', 'Ajay')); // "Ajay"  Replaces "Vijay" with "Ajay"
console.log(newString.search('Vijay')); // 0  Searches for "Vijay" and returns the starting index

//Returns the entire string when called without arguments. With slice(1, 4), it extracts the substring from index 1 to 3 (end index is not included).
console.log(newString.slice()); // "Vijay" (without arguments)
console.log(newString.slice(1, 4)); // "ija" (with start and end arguments)


//Returns the entire string in an array when called without arguments. With split('i'), it splits the string into an array at each occurrence of 'i'.
console.log(newString.split()); // ["Vijay"] (without arguments)
console.log(newString.split('i')); // ["V", "jay"] (with separator)


// Returns the entire string when called without arguments. With substring(1, 4), it extracts the substring from index 1 to 3 (end index is not included).
console.log(newString.substring()); // "Vijay" (without arguments)
console.log(newString.substring(1, 4)); // "ija" (with start and end arguments)



const newString1= "   My   Hero    "
console.log(newString1.trim()); // "My   Hero"
console.log(newString1.trimEnd()); // "   My   Hero"
console.log(newString1.trimStart()); // "My   Hero   "



//one more example 
const str = '   Hello, World!   ';

console.log(str.charAt(1)); // " "
console.log(str.charCodeAt(1)); // 32
console.log(str.codePointAt(1)); // 32
console.log(str.concat(' How are you?')); // "   Hello, World!    How are you?"
console.log(str.endsWith('!')); // false
console.log(str.includes('Hello')); // true
console.log(str.indexOf('o')); // 5
console.log(str.lastIndexOf('o')); // 8
console.log(str.localeCompare('hello')); // 1
console.log(str.match(/World/)); // ["World"]
console.log([...str.matchAll(/o/g)]); // [["o"], ["o"]]
console.log(str.normalize()); // "   Hello, World!   "
console.log(str.padEnd(20, '.')); // "   Hello, World!   .."
console.log(str.padStart(20, '.')); // "...   Hello, World!   "
console.log(str.repeat(2)); // "   Hello, World!      Hello, World!   "
console.log(str.replace('World', 'Everyone')); // "   Hello, Everyone!   "
console.log(str.replaceAll(' ', '-')); // "---Hello,-World!---"
console.log(str.search(/World/)); // 9
console.log(str.slice(3, 8)); // "Hello"
console.log(str.split(' ')); // ["", "", "", "Hello,", "World!", "", "", ""]
console.log(str.startsWith(' ')); // true
console.log(str.substring(3, 8)); // "Hello"
console.log(str.toLocaleLowerCase()); // "   hello, world!   "
console.log(str.toLocaleUpperCase()); // "   HELLO, WORLD!   "
console.log(str.toLowerCase()); // "   hello, world!   "
console.log(str.toUpperCase()); // "   HELLO, WORLD!   "
console.log(str.trim()); // "Hello, World!"
console.log(str.trimEnd()); // "   Hello, World!"
console.log(str.trimStart()); // "Hello, World!   "
console.log(new String('hello').valueOf()); // "hello"


// As of the latest ECMAScript standard, there are 30 string methods available in JavaScript. Here's the complete list:

// charAt(index)
// charCodeAt(index)
// codePointAt(pos)
// concat(str1, str2, ..., strN)
// endsWith(searchString, length)
// includes(searchString, position)
// indexOf(searchValue, fromIndex)
// lastIndexOf(searchValue, fromIndex)
// localeCompare(compareString, locales, options)
// match(regexp)
// matchAll(regexp)
// normalize(form)
// padEnd(targetLength, padString)
// padStart(targetLength, padString)
// repeat(count)
// replace(searchValue, replaceValue)
// replaceAll(searchValue, replaceValue)
// search(regexp)
// slice(beginIndex, endIndex)
// split(separator, limit)
// startsWith(searchString, position)
// substring(indexStart, indexEnd)
// toLocaleLowerCase(locales)
// toLocaleUpperCase(locales)
// toLowerCase()
// toUpperCase()
// trim()
// trimEnd()
// trimStart()
// valueOf()
// Each of these methods provides various functionalities to handle and manipulate strings in JavaScript.