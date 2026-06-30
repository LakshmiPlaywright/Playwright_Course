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


