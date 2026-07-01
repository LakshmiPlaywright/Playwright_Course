import {test,expect} from "@playwright/test"


test('leaftaps login', async ({page}) => {

await page.goto("https://leaftaps.com/opentaps/control/main")
await page.locator('#username').fill("demoCSR2")

//nth(0) or first() -> for first match
//nth(1)-> second match
//nth(n)-> last()-> for last match
await page.locator('[class="inputLogin"]').nth(1).fill('crmsfa')
await page.locator('.decorativeSubmit').click()
const linkLocator = page.getByRole('link',{name:'CRM/SFA'});
console.log("linklocator is ",linkLocator);
const targetURL = await linkLocator.getAttribute('href');
console.log("target URL is - ",targetURL);
// Convert relative URL to a fully qualified absolute URL
const newtargetURL = new URL(targetURL, page.url()).href;
console.log("new constructed target URL is ",newtargetURL); 

await page.locator(`text='CRM/SFA'`).click()

let pagetitle=await page.title()
console.log(pagetitle)

let pageurl=page.url()
console.log(pageurl);

await expect(page).toHaveTitle('My Home | opentaps CRM')
await expect(page).toHaveURL(newtargetURL);

})


test('salesforce login', async ({page}) => {

await page.goto("https://login.salesforce.com/?locale=in")
await page.locator('#username').fill("dilipkumar.rajendran@testleaf.com")

await page.locator('#password').fill('TestLeaf@2025')
await page.locator('#Login').click()
await expect(page).toHaveTitle('Home | Salesforce')

})
