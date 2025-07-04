const {test, expect}= require ('@playwright/test');

test('Home page',async({page})=>{
    await page.goto('https://medium.com/');
    await page.click("div[class='i cv cn co cp'] a[class='bv bw bx by bz ca cb cc cd ce cf cg ch ci cj']")
await page.click("body div div[role='dialog'] div[class='fs ft fu'] div[class='pw-susi-modal gc gd ge gf gg gh gi gj gk gl gm gn go gp bu ba gq'] div[class='gr gs gt gu gv gw gx gy gz ha hb hc n hd o p y q he hf dn'] div[class='bu'] div[class='o y he'] div[class='hj o y hk'] a:nth-child(1) div:nth-child(1)")
await page.click("li:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1)")    
page.close();

})