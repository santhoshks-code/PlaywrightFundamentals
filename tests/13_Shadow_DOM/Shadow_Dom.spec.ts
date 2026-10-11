import {test, expect, Locator  } from "@playwright/test";

test.describe('SVG Elements', ()=> {

const URL = 'https://www.flipkart.https://app.thetestingacademy.com/playwright/widgets/shadow-dom';

    test.beforeEach(async({page}) =>{
        console.log("Before running any Test caes");
        await page .goto(URL);

    });

    test("Verify Shadow DOM & assert visible", async ({page})=>{
   
        const shadowDOM: Locator = page.locator('#input');

    })

    
});