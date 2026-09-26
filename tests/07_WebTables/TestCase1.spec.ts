import {test, expect} from '@playwright/test';

test('Verify the Testcase', async ({page}) => {
   await page.goto("https://app.thetestingacademy.com/playwright/webtable");
   
 // await page.locayot("//td[text()='Aarav.Sharma']/preceding-sibling::td/input[@type='checkbox']"
// ).click();
   
   await page.locator("tr:has(td:text('Rohan.Mehta'))")
   .locator('input').first().click();

   await page.waitForTimeout(5000);


});