import { test, expect, Locator } from "@playwright/test";
import path from 'path';

test.describe('Scroll to Bottom', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/scroll');

    });

    test('Scroll to view', async ({page}) => {

        // Scroll to Bottom
           await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

        // Scroll to top
           await page.evaluate(() => window.scrollTo(0,0));

           await page.pause();
    })

});