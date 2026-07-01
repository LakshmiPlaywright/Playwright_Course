import {test,chromium} from "@playwright/test"

//Launch browser using browser instance, browser context, and page
/*
test.only("Launch Browser",async()=>{

//chromium is the base architecture for chrome and edge
const browser=await chromium.launch({headless:false, channel:"msedge"})
const context=await browser.newContext()
const page=await context.newPage()

await page.goto("https://www.redbus.in/")
await page.waitForTimeout(5000)
let sPageTitle = await page.title()
console.log(sPageTitle);
let sPageURL = page.url()
console.log(sPageURL);

})
*/

//Launch browser using browser instance, browser context, and page

test.only("Launch Browser",async()=>{

//chromium is the base architecture for chrome and edge
const browser=await chromium.launch({headless:false, channel:"webkit"})
const context=await browser.newContext()
const page=await context.newPage()

await page.goto("https://www.flipkart.com/")
await page.waitForTimeout(5000)
let sPageTitle = await page.title()
console.log(sPageTitle);
let sPageURL = page.url()
console.log(sPageURL);

})

