const {test, expect}= require ('@playwright/test');

test('Home page',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    const pageTitle=await page.title ();
    console.log('page title is:',pageTitle); //to capture
    ////2)expect (page). toHaveTitle() page has title
    await expect(page).toHaveTitle('Swag Labs');

    const pageURL=page.url; //to capture url
    
    console.log ('Page URL is: ', pageURL);
    //Here used different types of assertion
    //1) expect (page). toHaveURL()

    await expect(page).toHaveURL('https://www.saucedemo.com/');

    await page.fill('#user-name','standard_user') //used css
await page.fill('#password','secret_sauce')
//6)expect (locator). toHaveAttribute()  element has attribute
const regButton=await page.locator('#login-button')
//await expect(regButton).toHaveAttribute('type','Login')
await page.click('#login-button')

    //3)expect locator). toBeVisible() element is visible or not
    const logoElement=await page.locator("img[alt='Sauce Labs Backpack']")
    await expect(logoElement).toBeVisible()
//4)expect (locator). toBeEnabled ()
//expect (locator). toBeDisabled()
const searchStoreBox=await page.locator('.select_container')
await expect(searchStoreBox).toBeEnabled()
//7) expect (locator). toHaveText()  to check element have the content what we expect

await expect(await page.locator('.app_logo')).toHaveText('Swag Labs')// full text
//8) expect (locator). toContainText()  to check element have the content what we expect with only partial value of the text
await expect(await page.locator('.app_logo')).toContainText('Swag') //partial text




    page.close();

})