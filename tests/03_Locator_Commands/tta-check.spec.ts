import { test, expect } from "@playwright/test";

test('Verify the Katalon page Login', async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.locator('#btn-make-appointment').click();

    await page.locator('#txt-username').fill('John Doe');
    await page.locator('#txt-password').fill('ThisIsNotAPassword');
    await page.locator('#btn-login').click();

    await expect(page.locator('h2')).toContainText('Make Appointment');
});