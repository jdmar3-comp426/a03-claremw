import {sumToString, getIncreasingArray, maxAndMin, countArray} from "./src/mild/mild_1.js";
import {identifyVariable, identifyArray, removeKey, removeKeyNonDestructive, removeKeys} from "./src/mild/mild_2.js"; 
import {getSum, getMedian, getStatistics} from "./src/medium/medium_1.js"; 

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

let testArray = [1, "hi", 20, false]; 

let testArrayNumbers = [2, 6, 4, 12, 8]; 

/*
console.log(sumToString(3, 4)); 

console.log(getIncreasingArray(3, 7)); 

console.log(maxAndMin("9874985723")); 

console.log(countArray(getIncreasingArray(5, 26))); 

console.log(identifyVariable(true)); 
console.log(identifyVariable(7)); 
console.log(identifyVariable("hi")); 

console.log(identifyArray(testArray)); 



console.log(removeKey(destructable, 'property1')); 
console.log(destructable); 

console.log(removeKeyNonDestructive(testObject, 'property2')); 

console.log(removeKeys(testObject, ['property1', 'property2'])); 

*/

// should be 32
console.log(getSum(testArrayNumbers)); 

testArrayNumbers = [2, 6, 4, 12, 8]; 
// should be 6 
console.log(getMedian(testArrayNumbers)); 

testArrayNumbers = [2, 6, 4, 12, 8]; 
/* should be 
{
    length: 5
    sum: 32
    mean: 6.4 
    median: 6 
    min: 2
    max: 12
    variance: 14.8
    standard_deviation: 3.8470
}
*/
console.log(getStatistics(testArrayNumbers)); 

