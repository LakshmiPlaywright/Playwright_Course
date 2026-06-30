// sum of numbers in an array

let numberarray = [1,2,3,4,5,6]
let sum = numberarray.length-1
console.log(sum);
let i=0
let sumofarray=0
for (i=0;i<=sum;i++)
{
    console.log("counter value in for loop is ",i);
    sumofarray=sumofarray + numberarray[i]
    console.log("sum of array value for this loop is ",sumofarray);
      
    
}


// Wk2 Day 1 Classroom activity
let value ="playwritght is an automation tool"
let slicedvalue = value.slice(20)
let splitvalue = value.split(" ")
console.log("value of split and slice is - ", value.split(" ")[1].slice(0, 4));
console.log("value is - ", value);
console.log("sliced value is - ", slicedvalue);
console.log("value after slice is - ", value);
console.log("value after split is - ",splitvalue);


let value1 = "javascript"
console.log(" a occurs these many times in the word javascript - ", value1.split('a').length-1);
console.log("reverse is - ", value1.split("").reverse().join(""));