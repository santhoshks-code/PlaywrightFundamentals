import { test, expect, Locator } from "@playwright/test";
import path from 'path';

test.describe('Scroll to Bottom/Up', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/scroll');

    });

    test('Lazy Scroll', async ({page}) => {

        await page.getByTestId('lazy-list').scrollIntoViewIfNeeded();
        await page.getByTestId('lazy-list').scrollIntoViewIfNeeded();

        const list = page.getByTestId('lazy-list').locator('li');
        const intialCount = await list.count();

        //Scroll the Last existing item into view - item 11 does not exsit.
        //So nth(10) would just wait untill the test times out

        await list.last().scrollIntoViewIfNeeded();

        await expect.poll(async() => list.count(), {
            message: "expected_ites >10",
            timeout: 10_000
        }).toBeGreaterThan(intialCount);
        const finalCount = await list.count();
        console.log(finalCount);

        await page.waitForTimeout(1000);
        
    })

});