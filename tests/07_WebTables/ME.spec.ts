import {test , expect } from '@playwright/test';

test ('Verify how to handle multiple elements', async({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const rightPanelLinkTexts = await page.locator('a.list-group-item').allTextContents();
    console.log(rightPanelLinkTexts.length);

    for (const link of rightPanelLinkTexts){
        console.log(link);
    }

    for (const linkText of rightPanelLinkTexts){
        console.log(linkText);
    }

    for (const linkText of rightPanelLinkTexts){
        if (linkText === 'Forgottem Password'){
            await page.getByText(linkText).first().click();
        }
    }

    await page.pause();
});