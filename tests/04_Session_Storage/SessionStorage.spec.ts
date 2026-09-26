import { chromium } from 'playwright';
import dotenv from 'dotenv';

async function saveSession() {

    let browser = await chromium.launch ({ headless: false});
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://app.wingify.com/#/login");
    await.page.waitforTimeout

    await page.fill('#login-username', VWO_USER);
    await page.fill('#login-password', VWO_PASS);

    await page.click('#js-login-btn');

    await context.storageState({ path: ".user-session.json"});
    console.log("Session save to user-session.json");


}

