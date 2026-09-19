import { test, expect } from '@playwright/test';

test("Verify the error message in the wingfy from tria", async ({ page }) => {
    await page.goto("https://wingify.com/free-trial/");
    let inputbox = page.locator("//input[@id='free-trail-step1-email']");
    await inputbox.fill("abcd");

    await page.locator("#free-trial-step1-gdpr-consent-checkboxcu-marketing-consent-checkbox");
    await page.locator("#free-trial-step1-gdpr-consent-checkboxcu-gdpr-consent-checkbox");

    let error_message = page.locator("//div[contains(@class,'invalid-input')]");
    await expect(error_message).toBeVisible();
});