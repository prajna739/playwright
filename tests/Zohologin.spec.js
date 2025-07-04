import { test, expect } from '@playwright/test';

test('ZOHOLOGIN', async ({ page }) => {
    await page.goto('https://www.zoho.com/forms/ ');
    await page.click("div[class='zgh-utilities'] a[class='zgh-login']")
    await page.fill('#login_id','prajna@qaoncloud.com')
await page.click("#nextbtn")
await page.fill('#password','Kiaan@2025')
//----radio button    
await page.click("#nextbtn")
//await page.click("span[class='link-btn']")
await page.click("li[class='formListing formListFolder classicFrm'] div[class='singleHead flLeft']");
await page.goto('https://forms.zoho.in/qaoncloudcom1/form/demotest');
//radio button
await page.locator("label[for='Radio_1']").check(); //to select the radio button
await expect(await page.locator("label[for='Radio_1']")).toBeChecked(); //to check radio button is selected or not
await expect(await page.locator("label[for='Radio_1']").isChecked()).toBeTruthy(); //radio button selection true
// We are selecting one radio button and need to verify that the rest of the radio buttons are not selected.
await expect(await page.locator("label[for='Radio_2']").isChecked()).toBeFalsy();// checking 'To test how the system handles incorrect input' radio button is not selected
//-----------------

//------------------checkbox
await page.locator("label[for='Checkbox_1']").check(); //to select the checkbox
await expect(await page.locator("label[for='Checkbox_1']")).toBeChecked(); //to check checkbox is selected or not
await expect(await page.locator("label[for='Checkbox_1']").isChecked()).toBeTruthy(); //checkbox selection true
// We are selecting one radio button and need to verify that the rest of the checkbox are not selected.
await expect(await page.locator("label[for='Checkbox_2']").isChecked()).toBeFalsy();// checking 'To test how the system handles incorrect input' checkbox is not selected

//----------------


//drop down
await page.click("span[role='presentation']");
await page.click("label[id='Checkbox-arialabel'] span[class='fieldLabelTxt ']");
//---------------

//date
await page.fill('#Date-date','23-Jun-2025'); //this is operation to directly provid the string
await page.waitForTimeout(3000);
//one more method is select the date is date picker
/*const year="2025"
const month="June"
const date="20"


await page.click('#Date-date');//to open the calender
while(true)
{
    const currentYear=await page.locator('#select2-9vom-container').textContent(); //validate the year
    await page.waitForSelector('#select2-9vom-container');
    await page.waitForTimeout(5000);
    const currentMonth=await page.locator('#select2-5r0u-container').textContent(); //validate the month
    
    if(currentYear == year && currentMonth == month);
{
    break;
}
await page.locator("a[title='Next']").click()
}
const dates=await page.$$("//a[@class='ui-state-default']")
for(const dt of dates)
{
    if(await dt.textContent()==date)
    {
        await dt.click();
        break;
    }
}
await page.waitForTimeout(3000);*/
//---------------------------------

//File upload
await page.locator('.icon.icon-upload').click(); //clicking the upload file and the selecting the image
await page.setInputFiles('input[type="file"]', 'tests/Upload/Screenshot 2024-03-14 174759.png')

await page.waitForTimeout(3000);
//----------------
await page.goto('https://forms.zoho.in/qaoncloudcom1/home#myforms');




})