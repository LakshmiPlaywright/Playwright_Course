//02-NumberType



function numberfunction(number)
{

    let resultmssg=String
    if (number > 0)
    {
        resultmssg = "number is positive"
    }
    else if (number == 0)
    {
        resultmssg ="number is ZERO"
    }
       
    else 
    {
            resultmssg ="number is negative"
    }
    return resultmssg;     
        
}

console.log(numberfunction(123));
console.log(numberfunction(-1123));
console.log(numberfunction(0));


//03-Conditional Statements

function launchbrowser(browserName)
{
if (browserName ==="chrome")
{
    console.log("browser name is ",browserName);
}
else if(browserName =="edge")
{
    console.log("browser name is ",browserName);
}
else if (browserName === "firefox")
{
    console.log("browser name is ",browserName);
}
else
{
    console.log("browser name is chromium");
}

}
function runtests(runTests)
{
switch (runTests) {
    case "smoke":
         console.log("test type1 is ",runTests);
         break
    case "sanity":
         console.log("test type2 is ",runTests);
         break
    case "regression":
         console.log("test type3 is ",runTests);
         break
    case "accessibility":
         console.log("test type4 is ",runTests);
         break;

    default:
        console.log("test type - default is SIT");
        break;
}
}

launchbrowser("chrome");
launchbrowser("firefox");
launchbrowser("edge");
launchbrowser("opera");

runtests("sanity");
runtests("smoke");
runtests("accessibility");
runtests("performance");
runtests("regression");

