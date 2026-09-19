import { test, expect } from '@playwright/test';

test('Verify the CURA page is loaded', async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    let appointment_button = page.locator('#btn-make-appointment');
    await appointment_button.click();

    let userName = page.locator('#txt-username');
    let Password = page.locator('#txt-password');
    let Login_button = page.locator('#btn-login');

    await userName.fill("John Doe");
    await Password.fill("ThisIsNotAPassword");
    await Login_button.click();

    let Verify_message = page.locator('h2');
    await expect(Verify_message).toContainText("Make Appointment");
    await page.pause();

});

// To run in UI mode directly in debug mode
// npx playwright test tests/03_Locator_Commands/Test_Katalon.spec.ts --ui