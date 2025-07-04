import { test, expect } from '@playwright/test';

test('ZOHOLOGIN', async ({ page }) => {
    await page.goto('https://www.zoho.com/forms/ ');
    await page.click("div[class='zgh-utilities'] a[class='zgh-login']")
    await page.fill('#login_id','prajnakotian811@gmail.com')
await page.click("#nextbtn")
await page.fill('#password','Prajna@2025')
//----radio button    
await page.click("#nextbtn");
await page.waitForTimeout(3000);
await page.click("#createFormBtn");
await page.fill('#formName','Demo1');
await page.click("li[id='nameLi'] svg");

//await page.waitForTimeout(3000);
//await page.click("div[class='sortable-field-handler ui-sortable-handle'] div[class='arrowNav']");
//wait page.locator("div[id='form-right-pane'] div[elname='fldLabelInpDiv'] input[type='text']").fill('Title');
await page.waitForTimeout(3000);
const Home = await page.locator('.icon-home');
await Home.hover();
await page.waitForTimeout(3000);
await page.click("a[href='/prajnakotian811gm1/home#myforms']");
const Demo2 = await page.locator('body > div:nth-child(61) > div:nth-child(33) > ul:nth-child(4) > li:nth-child(2)');
await Demo2.hover();

})