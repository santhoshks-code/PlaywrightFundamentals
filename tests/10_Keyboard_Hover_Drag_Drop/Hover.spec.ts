import {test, expect, Locator  } from "@playwright/test";

test('Verify the Hover Test cases', async({page}) =>{

    await page.goto("https://www.spicejet.com/");
    await page.getByText("Add-ons, {exact:true})").hover();
    await page.getByText('FluEarly', {exact: true}).click();
    await page.pause();
    
});