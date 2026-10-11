import { test, expect, Locator } from "@playwright/test";
import path from 'path';

test.describe('Scroll to Element', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/scroll');

    });

    test('Scroll to view', async ({page}) => {

        await page.getByTestId("deep-anchor").scrollIntoViewIfNeeded();
        await page.getByTestId('deep-anchcor').click();
        await page.pause();

        await page.evaluate(() => window.scrollBy(0, 1000));

    })

});