const {test, expect}= require ('@playwright/test');
test('multiple locator',async({page})=>{
    await page.goto('https://demoblaze.com/ ');
    const links = await page.$$('a'); //a will call the all the elements

    for(const link of links)
    {
        const linktext= await link.textContent();
        console.log(linktext);
    }
const products=await page.$$("//div[@id='tbodyid']//div//h4/a")
for(const product of products)
{
    const productName=await product.textContent();
    console.log(productName)
}
await page.close()

})
