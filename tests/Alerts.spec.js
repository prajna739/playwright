/*const {test, expect}= require ('@playwright/test');
test('Alert',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
//enabling alerts handling, using following function enabling the alert
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();

})
//after anabling the dialog we can alert
await page.click('#alertBtn');
await page.waitForTimeout(3000);

 page.close()
    })

const {test, expect}= require ('@playwright/test');
test('Confirmation diaload alert with ok and cancel',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
//enabling alerts handling, using following function enabling the alert
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!');
        //await dialog.accept();//close by using ok button
        await dialog.dismiss();//close by using cancel button

})
//after anabling the dialog we can alert
await page.click('#confirmBtn');
await expect(page.locator('#demo')).toHaveText('You pressed Cancel!');
await page.waitForTimeout(3000);

 page.close()
    })*/

    const {test, expect}= require ('@playwright/test');
test('Confirmation diaload alert with ok and cancel',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
//enabling dialog window handler
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:');
        expect (dialog.defaultValue()).toContain('Harry Potter')

        await dialog.accept('John');//close by using ok button
        //await dialog.dismiss();//close by using cancel button

})
//after anabling the dialog we can alert
await page.click('#promptBtn');
await expect(page.locator('#demo')).toHaveText('Hello John! How are you today?');
await page.waitForTimeout(3000);

 page.close()
    })