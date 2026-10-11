import {test, expect, Locator  } from "@playwright/test";
import path from 'path';

test.describe('File Download', ()=> {

const URL = 'https://app.thetestingacademy.com/playwright/widgets/upload-download';

    test.beforeEach(async({page}) =>{
        console.log("Before running any Test caes");
        await page .goto(URL);

    });

    test("Verify File Download", async ({page})=>{
       // FIle Upload
       //Path of the file - You should A

      const [StaticDownload] = await Promise.all([
        page.waitForEvent('download'),
        page.getByTestId('download-static').click()
      ]);

      await StaticDownload.saveAs('./out/'+ StaticDownload.suggestedFilename);
    });

});
