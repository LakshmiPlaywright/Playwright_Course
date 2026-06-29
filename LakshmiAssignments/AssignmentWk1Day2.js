
// 01-Primitive-Datatypes

let userName="Automation Tester "
console.log("type of variable userName is - ",typeof userName);
let organization="Test Leaf pvt ltd. 2026"
console.log("type of variable organization is - ",typeof organization);
let contactNumber=9123456789
console.log("type of variable contactNumber is - ",typeof contactNumber);
let knowsAutomation=true
console.log("type of variable knowsAutomation is - ",typeof knowsAutomation);
let usesPlaywright=undefined
console.log("type of variable usesPlaywright is - ",typeof usesPlaywright);

 
//02-var-let-const
const broswerversion="chrome"
console.log("browser version outside function is ",broswerversion);

function getbrowserversion()
{
     if (broswerversion=="chrome"){
        //console.log("browser version inside if block is ",broswerversion);
        let broswerversion="CHROME browser"
        console.log("browser version inside if block but inside function is ",broswerversion);
    }
    
    console.log("browser version outside if block but inside function is ",broswerversion);
}
 
getbrowserversion();