import {test, expect} from '@playwright/test';
// group together for different test cases

test.describe('Login page', () => {

    test('Valid credentials', async({ page }) =>{
    await page.goto("https://app.thetestingacademy.com/playwright/")
    });

    test('Invalid password', async({ page}) => {
    await page.goto("https://app.thetestingacademy.com/playwright/")

    });

});
// npx playwright test -g "Login page";