import {test, expect } from '@playwright/test';

test('verify X', async ({ page })=>{
    await page.goto ("https://app.thetestingacademy.com/playwright/multiple_elements");
    {waituntil : 'commit'}

const response = await page.goto ("https://app.thetestingacademy.com/playwright/");
   {waituntil: 'DOMContentLoaded'}
});

console.log(Response);