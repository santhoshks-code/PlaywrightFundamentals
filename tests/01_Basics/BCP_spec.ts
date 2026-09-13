import { chromium, BrowserContext, Page, Browser } from "@playwright/test";

async function run() {
  // Level 1: Launch Browser
  const browser: Browser = await chromium.launch({ headless: false });
  console.log("Browser launched", browser);

  // Level 2: Create context - fresh session, isolated cookies
  const context1: BrowserContext = await browser.newContext();
  console.log("Context created", context1);

  // Level 3: Open page - a tab inside the context
  const page: Page = await context1.newPage();
  console.log("Page opened");

  // cleanup - reverse order
  await page.close();
  await context1.close();
  await browser.close();
}

run();