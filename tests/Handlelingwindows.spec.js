const {test, expect, chromium}= require ('@playwright/test');
test('Handle pages/windows',async()=>{
const browser= await chromium.launch()
const context=await browser.newContext()

const page1=await context.newPage()
const page2=await context.newPage()

//wants to know how many pages are created
const allPages=context.pages()
console.log("No of pages created:",allPages.length)
await page1.goto('https://www.zoho.com/forms/ ')
await expect(page1).toHaveTitle('Form Builder | Create Free Online Forms - Zoho Forms');

await page2.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await expect(page2).toHaveTitle('OrangeHRM');

})
