import { test, expect } from '@playwright/test';

test("Verify the Webtable Example 1", async ({ page }) => {

    // start code here
    await page.goto('https://awesomeqa.com/webtable.html');

    // your test steps go here
    const firstPart = "/table[@id=customer]/tbody/tr[";
    const secondPart = "]/td[";
    const thirdPart = "]";

    const rows = await page.locator("//table[@id='customers']/tbody/tr").count();
    const columns = await page.locator("//table[@id='customers']/tbody/tr/td").count();

    for (let i = 2; i <= rows; i++) {

        for (let j = 1; j <= columns; j++) {

        const dynamicXpath = `${firstPart}${i}{secondPart}${thirdPart}`;
        console.log(dynamicXpath);
        const data = await page.locator(dynamicXpath).innerText();
        console.log(data);

        }
    }


});