import {test, expect} from '@playwright/test';
import { text } from 'node:stream/consumers';

test('Verify the Testcase', async ({page}) => {
   await page.goto("https://app.thetestingacademy.com/playwright/webtable");
  

   let name: string = 'Luca Greco';
   let row;
   while(true){
    row = page.locator('#employees-tbody tr').filter({ hasText: name}); 
    if(await row.count()) {
      break;
    }
   }

   const next = page.getByTestId('next-page');
   if(await next.isDisabled){
    throw new Error('Row not found!');
   }

   await next.click();

   await page.waitForTimeout(5000);


});