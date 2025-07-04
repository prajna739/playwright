/*alidate the error message in forms
await page.fill('#email',' ');
await page.click('#signupbtn')
const errorMessage = page.locator('#email-error');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toHaveText('Please enter a valid email address');*/

//case to have test apply for any test field
  const emailInput=await page.locator(".input[id='email']") ////9) expect (locator). toHaveValue (value)
await emailInput.fill('prajna@qaoncloud.com')//provide email, checking the value and given value is correct or not
await expect(emailInput).toHaveValue('prajna@qaoncloud.com')

//---radio GamepadButton