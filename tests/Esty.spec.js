import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://www.zoho.com/forms/ ');
    await page.click("div[class='zgh-utilities'] a[class='zgh-login']")
    await page.fill('#login_id','prajna@qaoncloud.com')
await page.click("#nextbtn")
await page.fill('#password','Kiaan@2025')
    
await page.click("#nextbtn")
await page.click("span[class='link-btn']")
await page.close()
})