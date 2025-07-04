import { test, expect } from '@playwright/test';

test('Zoho', async ({ page }) => {
    await page.goto('https://www.zoho.com/forms/ ')
//await page.screenshot({path:'tests\Upload'+Date.now()+'HomePge.png'}); //*** */ to capture the screenshot

    //-----------------------------------------------------------------------------------------------
//[1home page
  const pageTitle=await page.title ();
    console.log('page title is:',pageTitle); //to capture (to verify the titlr of the page)
    await expect(page).toHaveTitle('Form Builder | Create Free Online Forms - Zoho Forms');

    const pageURL=page.url; //to capture url
    
    console.log ('Page URL is: ', pageURL);

    await expect(page).toHaveURL('https://www.zoho.com/forms/');
 //3)expect locator). toBeVisible() element is visible or not
    const logoElement=await page.locator("a[aria-label='zoho logo']") //verifying the logo of the website present and visible
    await expect(logoElement).toBeVisible()

   //4)expect (locator). toBeEnabled ()
//expect (locator). toBeDisabled()
await page.click(".zgh-search-icon") //there is the search bar , click it , the locator i have taken is class and the class locator begins with . (ex.zgh-search-icon)
const searchStoreBox=await page.locator('#zgh-search-query') // here checking the search store box is enable or not
await expect(searchStoreBox).toBeEnabled()

//7) expect (locator). toHaveText()  to check element have the content what we expect

await expect(await page.locator("div[class='zwc-banner-ctn'] h1")).toHaveText('Your go-to form builder for seamless data collection')// full text
//8) expect (locator). toContainText()  to check element have the content what we expect with only partial value of the text
//await expect(await page.locator("div[class='zwc-banner-ctn'] h1")).toContainText('Zoho') //partial text

//to check in dropdown how many option are available 
//10) expect (locator). toHaveCount ( )
const options= await page.locator("li[class='expanded dropdown zmenu-resources dropdown-right'] span[role='button'] en")
//await expect(options).toHaveCount(li)


//]-1


//-------------------------------------------------------------------------
//[2-From
//6)expect (locator). toHaveAttribute()  element has attribute
// the button have multiple attributr name,id,class and so on, here we taking the type attribute that is submited or not
const signButton=await page.locator('#signupbtn') //we taking the sign up for free button and checking here the 'type' attribute is present or not
await expect(signButton).toHaveAttribute('type','submit')
await page.click('#signupbtn')


//we can check 'the company name' input box is visible or not
await expect(await page.locator('#portalcompanyname')).toBeVisible(); //to check input box is visible or not
await expect(await page.locator('#portalcompanyname')).toBeEmpty(); //to check input box is empty or not
await expect(await page.locator('#portalcompanyname')).toBeEditable();//to check input box is editable or not
await expect(await page.locator('#portalcompanyname')).toBeEnabled();//to check input box is enable or not
    //using different  types of locator we can loacte the ids css,class, id
//when ever we want to create our own css using id its begins with #(ex.#portalcompanyname)
await page.fill('#portalcompanyname','qaoncloud'); //providing company name for Get started with free online forms.
await page.waitForTimeout(5000); //to pausing code
//there is another method we can loacte with id taking input and id (ex.input[id='email'])
await page.fill("input[id='email']",'prajna1@qaoncloud.com');
await page.fill("//input[@id='rmobile']",'8978987656');
await page.fill('#password','Kan@2025');
const termCheckbox = await page.locator('#signup-termservice');//assertion operation is used to select the check box and verify the checkbox is selected or not
await termCheckbox.click();
await expect(termCheckbox).toBeChecked();
await page.click("#signup-termservice")

//]-2
//---------------------------------------------------------------------------------------

//[3 Element links
//to verify the element
const creatorlink=await page.locator("a[href='/creator/?src=zGlobalRelatedProducts']") //to check the cretor link is present and visible
await expect(creatorlink).toBeVisible();

//to capture all links or capture product name (multiple web element)
// in a website want to capture all the links which are present  in the home page.(we can search it by using //a, the a is the tagline of all link)
const links = await page.$$('a'); //a will call the all the elements

    for(const link of links)
    {
        const linktext= await link.textContent();
        console.log(linktext);
    } //It will gives all the links which are present in the home page

    //to give all the products
const products=await page.$$("//div[@class='zwc-flow-app-section-inner']//div/a") //'Integrate with more than 150 apps' this contain the products that all products are displayed
for(const product of products)
{
    const productName=await product.textContent();
    console.log(productName)
}
//]3
//-------------------------------------------------------------------------------------------------

//[4
//DROP DOWN
// await page.hover('.dropdown-toggle.nolink', { timeout: 50000 });
//]4
//-----------------------------
//[5
//total frames
const allframes=await page.frames()
console.log("Number of frames:",allframes.length)  //it will display how many frames are present in home page
const frame1=await page.frame({url:'iohjgamcilhbgmhbnllfolmkmmekfmci/iframe.html?tabId=811860797'}) //here intracted with frame which contain the link of jam
//]5



//-------------------------------------------------------------------

//[6
//mousehover
const feature = await page.locator('body > header:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > span:nth-child(1)');
const web = await page.locator("div[class='product-nav-links'] li[class='zmenu-web sub-level'] span[role='button']");

await feature.hover();
await web.hover();
await page.waitForTimeout(3000);
//]6
//-----------------------------------------------


//search bar operations
await page.click(".zgh-search-icon") //validate search bar
await page.click("button[aria-label='Zoho Search']") //validate close icon
await page.click(".zgh-search-icon") //validate search bar
await page.fill('#zgh-search-query', 'test');
 await page.keyboard.press('Enter');
await page.waitForTimeout(3000);
await page.goBack();// to validate back screen
await page.click(".zgh-search-icon") //
await page.fill('#zgh-search-query', '  ')//validate invalid search
await page.keyboard.press('Enter');
//await expect(await page.locator('.ws_noFound')).toHaveText('No results match your search.');
//await page.waitForTimeout(5000);
//await page.goBack();

/*//-------------------
await page.click("a[href='/creator/?src=zGlobalRelatedProducts']");//click creator module
await page.click("#signupbtn")
//await page.waitForTimeout(5000);
await expect(await page.locator("#name-error")).toHaveText('Please enter your first name'); //validate error without gibing inputs
await expect(await page.locator("#email-error")).toHaveText('Please enter a valid email address');
await expect(await page.locator("#password-error")).toHaveText('Password cannot be less than 8 characters');
await expect(await page.locator("#rmobile-error")).toHaveText('Please enter a valid mobile number');

----------------------------*/
//to play video
 const iframeElement = await page.waitForSelector('.zwc-our-brands');
  const iframe = await iframeElement.contentFrame();

  if (iframe) {
    // Click the play button inside the Wistia iframe
    await iframe.click('.paly-pasue.active'); // Wistia uses this label
    console.log('Clicked Play inside iframe');

    await page.waitForTimeout(5000); // Wait 5 seconds

     // Click pause
    await iframe.click('.paly-pasue');
    console.log('Clicked Pause inside iframe');

    await page.waitForTimeout(3000);

  }
  // Play the video using JavaScript
  // Wait for the iframe to load
 

  




await page.close()



})