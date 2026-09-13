import { chromium, Browser, BrowserContext, Page } from "@playwright/test";

async function run() {
    const browser: Browser = await chromium.launch({ headless: true });
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();

    await page.goto("https://www.google.com");
    console.log("Page opened");
}

run();