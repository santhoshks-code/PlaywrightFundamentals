import { test, expect, Locator } from "@playwright/test";

test.describe('SVG Elements', () => {

    const URL = ('https://app.thetestingacademy.com/playwright/widgets/svg');

    test.beforeEach(async ({ page }) => {
        console.log("Before running any Test caes");
        await page.goto(URL);

    });

    test('Verify the SVG root and assert visible', async ({ page }) => {
       const circleShape: Locator = page.locator('#circle-blue');
       await circleShape.click();

       const output = await page.locator('#shape-output').innerText();
       expect(output).toContain('Blue circle');
    });

});