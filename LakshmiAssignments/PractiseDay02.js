/*
var number=20
console.log(number++)
console.log(++number)
*/

/*
let marks=28
if(marks===50)
    console.log("just pass")
else if(marks>40 && marks<=60)
    console.log("more than just pass")
else if(marks>60 && marks<=80)
    console.log("1st class")
else if(marks>80 && marks<=100)
    console.log("centum")
else
    console.log("out of range");

*/

/*
for( i=0; i<=25; i++){
   if(i%2 !=0){
       console.log(i);
  }
}  
*/
        
/*
let companyName="Testleaf"
//let companyName="Qeagle" //redeclaration is not possible but can be reassigned
companyName="TCS"
companyName=1234
console.log(companyName);
*/

/*const course ="Playwright" //redeclaration and reassignment is not possible
console.log(course); 
course ="selenium"
console.log(course); 
*/

/*
console.log(number)
var number=10 //var number+number=10
console.log(number)
number+=15
console.log(number)
*/

 //let and const are block scoped variables
 // var is function scoped variable
 
/*
function scp(){

 if(true){
var browser="chrome"
console.log("printing chrome browser inside the IF block",browser)

 }
 console.log("printing chrome browser outside the IF block",browser)
}
console.log("printing chrome browser outside the function block")
scp()
console.log("printing chrome browser outside the function block after function block")
*/

/*
let value ="playwritght is an automation tool"
let slicedvalue = value.slice(20)
let splitvalue = value.split(" ")
console.log("value of split and slice is - ", value.split(" ")[1].slice(0, 4));
console.log("value is - ", value);
console.log("sliced value is - ", slicedvalue);
console.log("value after slice is - ", value);
console.log("value after split is - ",splitvalue);
*/

let value = "javascript"
console.log(" a occurs these many times in the word javascript - ", value.split('a').length-1);
console.log("reverse is - ", value.split("").reverse().join(""));




