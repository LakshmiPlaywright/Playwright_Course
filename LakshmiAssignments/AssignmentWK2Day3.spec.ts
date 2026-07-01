import {test,expect} from "@playwright/test"


test('Leaftaps Create Lead', async ({page}) => {

await page.goto("https://leaftaps.com/opentaps/control/main")
await page.locator('#username').fill("demoCSR2")
await page.locator('#password').fill('crmsfa')
await page.locator('.decorativeSubmit').click()//decorativeSubmit
await page.locator(`text='CRM/SFA'`).click()
await page.locator('a[href="/crmsfa/control/leadsMain"]').click();
await page.locator('a[href="/crmsfa/control/createLeadForm"]').click();
await page.locator('#createLeadForm_companyName').fill("MyCompanyName");
await page.locator('#createLeadForm_firstName').fill("MyFirstName");
await page.locator('#createLeadForm_lastName').fill("MyLastName");
await page.locator('select#createLeadForm_dataSourceId').selectOption('Conference');
await page.locator('#createLeadForm_personalTitle').fill("Mrs");
await page.locator('#createLeadForm_generalProfTitle').fill("Lord Of the Rings");
await page.locator('#createLeadForm_annualRevenue').fill("123456789");
await page.locator('#createLeadForm_departmentName').fill("Testing COE");
await page.locator('#createLeadForm_primaryPhoneNumber').fill("9123456789");
await page.locator('input[name="submitButton"]').click();
await expect(page.locator('#sectionHeaderTitle_leads')).toContainText('View Lead');
})

