import { test, expect } from '@playwright/test';

const TITLE = 'Verify the TestCase'; // change the title

test(TITLE, async ({ page }) => {

    // start code here
    await page.goto('https://app.thetestingacademy.com/playwright/');

    // your test steps go here

    await page.pause();

});