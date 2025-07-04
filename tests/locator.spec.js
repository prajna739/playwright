const {test, expect}= require ('@playwright/test');
test('locator',async({page})=>{
    await page.goto('https://demoblaze.com/ ');
//click on login button (using id)

await page.locator('id=login2').click()
//provide user name (using css locator)
//await page.locator('#loginusername').fill("test")
await page.fill('#loginusername','pavanol') //used css
await page.fill('#loginpassword','test@123') //used css
await page.click("//button[normalize-space()='Log in']") //used xpath
//verify logout link is present
const logoutlink=await page.locator("(//a[normalize-space()='Log out'])[1]")
await expect(logoutlink).toBeVisible();
await page.close()

})
