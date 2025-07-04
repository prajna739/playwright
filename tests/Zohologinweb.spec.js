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
await page.click("#createBtn");

//await page.waitForTimeout(3000);
//await page.click("div[class='sortable-field-handler ui-sortable-handle'] div[class='arrowNav']");
//wait page.locator("div[id='form-right-pane'] div[elname='fldLabelInpDiv'] input[type='text']").fill('Title');
await page.waitForTimeout(3000);
const Home = await page.locator('.icon-home');
await Home.hover();
await page.waitForTimeout(3000);
await page.click("a[href='/prajnakotian811gm1/home#myforms']");
//validate Filter
await page.click("#entryFilterIcon");
await page.click("li[elname='activeForms']");
//mouse hover to the created form
const form = await page.locator('body > div:nth-child(60) > div:nth-child(33) > ul:nth-child(4) > li:nth-child(2)');

await form.hover();
await page.waitForTimeout(3000);
/*await page.locator("label[for='Demo13']").check(); //to select the checkbox
await expect(await page.locator("label[for='Demo13']")).toBeChecked();
//code for popup window
 const popupSelector = 'body > div:nth-child(61) > div:nth-child(8) > div:nth-child(3) > div:nth-child(1)';
  await page.waitForSelector(popupSelector, { state: 'visible' });

  //hover to three dotted lines
  const frm = await page.locator("span[elname='searchStripMoreOptionsIcon'] icon[class='icon-more']");

await frm.hover();
await page.waitForTimeout(3000);
//disable the form//toggle 

const toggleSelector = "li[value='DISABLE']";

  // Wait for the toggle to be visible
  await page.waitForSelector("li[value='DISABLE']");

  // Click to toggle ON/OFF
  await page.click("li[value='DISABLE']");

  // Optional: check the toggle state after clicking
  const isToggled = await page.$eval("li[value='DISABLE']", el => {
    return el.classList.contains('active') || el.checked; // adjust condition based on actual toggle logic
  });

  console.log('Toggle state is:', isToggled ? 'ON' : 'OFF');

  //creating new folder
await page.click('#select2-folderSelect-container');
await page.click("script[type='module']");
await page.fill('#folderNameInp','test');
await page.click('#createMoveFolderBtn');
await page.click("div[class='flRight moveFolDel exit-Enable'] icon[class='icon-close']");
  await browser.close();
//create a form
await page.click('#createFormBtn');
await page.fill('#formName','test');
await page.click('#createBtn');
//drag and drop
  const sourceSelector = await ("div[id='toolbar'] div[class='fieldListChoice'] li:nth-child(3)");   // Replace with your source element selector
  const targetSelector = await ("div[class='sortable-field-handler ui-sortable-handle'] div[class='arrowNav']");   // Replace with your target element selector
   // Wait for both elements to be visible
  await page.waitForSelector("div[id='toolbar'] div[class='fieldListChoice'] li:nth-child(3)");
  await page.waitForSelector("div[class='sortable-field-handler ui-sortable-handle'] div[class='arrowNav']");

  // Perform drag and drop
  await page.dragAndDrop("div[id='toolbar'] div[class='fieldListChoice'] li:nth-child(3)","div[class='sortable-field-handler ui-sortable-handle'] div[class='arrowNav']");
await page.click("div[class='sortable-field-handler ui-sortable-handle'] div[class='fldsHeaderDiv'] div[class='arrowNav']");
 await page.locator("body > div:nth-child(71) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(14) > ul:nth-child(2) > li:nth-child(6) > div:nth-child(4) > div:nth-child(3) > label:nth-child(2)").check(); //to select the checkbox
await expect(await page.locator("body > div:nth-child(71) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(14) > ul:nth-child(2) > li:nth-child(6) > div:nth-child(4) > div:nth-child(3) > label:nth-child(2)")).toBeChecked();
await page.fill("input[type='text'][choiceid='208652000000005533']",'option1');
await page.click("div[id='form-right-pane'] button[class='lightBlue fLRight']");*/
  await browser.close();
})