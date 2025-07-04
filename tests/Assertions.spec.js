const {test, expect}= require ('@playwright/test');
test('Assertion',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/');
    await page.click('.ico-register')
    //expect (locator). toBeChecked ( ) [If there is any radio button or check box after selecting it if we need to check the status]
//radio button
const maleRadioButton = await page.locator('#gender-male');
await maleRadioButton.click(); // Select radio button
await expect(maleRadioButton).toBeChecked(); // Verify it is selected

//check box
const maleCheckbox = await page.locator('#Newsletter');
await expect(maleCheckbox).toBeChecked();

//9) expect (locator). toHaveValue (value)
const emailInput=await page.locator("#Email")
await emailInput.fill('prajna@demo.com')
await expect(emailInput).toHaveValue('prajna@demo.com')

    page.close();

})