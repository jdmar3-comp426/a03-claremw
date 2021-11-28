import {sumToString, getIncreasingArray, maxAndMin, countArray} from "./src/mild/mild_1.js";
import {identifyVariable, identifyArray, removeKey, removeKeyNonDestructive, removeKeys} from "./src/mild/mild_2.js"; 

let testObject = {
    property1: "hello world", 
    property2: 20, 
    property3: false, 
    property4: "hi"
}; 
let destructable = {
    property1: "hello world", 
    property2: 20, 
    property3: false, 
    property4: "hi"
}; 

console.log(testObject.property1); 

let testArray = [1, "hi", 20, false]; 

/*
console.log(sumToString(3, 4)); 

console.log(getIncreasingArray(3, 7)); 

console.log(maxAndMin("9874985723")); 

console.log(countArray(getIncreasingArray(5, 26))); 

console.log(identifyVariable(true)); 
console.log(identifyVariable(7)); 
console.log(identifyVariable("hi")); 

console.log(identifyArray(testArray)); 

*/

console.log(removeKey(destructable, 'property1')); 
console.log(destructable); 

console.log(removeKeyNonDestructive(testObject, 'property2')); 

console.log(removeKeys(testObject, ['property1', 'property2'])); 
