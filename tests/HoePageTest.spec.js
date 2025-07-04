const {test, expect}= require ('@playwright/test');

test('Home page',async({page})=>{
    await page.goto('https://demoblaze.com/');
    const pageTitle=await page.title ();
    console.log('page title is:',pageTitle); //to capture
    await expect(page).toHaveTitle('STORE');

    const pageURL=page.url; //to capture url
    
    console.log ('Page URL is: ', pageURL);

    await expect(page).toHaveURL('https://demoblaze.com/');
    page.close();

})

