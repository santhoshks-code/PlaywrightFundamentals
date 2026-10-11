import {test, expect, Locator  } from "@playwright/test";
import path from 'path';

test.describe('File Upload', ()=> {

const URL = 'https://the-internet.herokuapp.com/upload';

    test.beforeEach(async({page}) =>{
        console.log("Before running any Test caes");
        await page .goto(URL);

    });

    test("Verify File Upload", async ({page})=>{
       // FIle Upload
       //Path of the file - You should A

       const filePath = path.join(__dirname, 'testdata.txt');
       console.log(filePath);

       await page.locator('#file-upload').setInputFiles([filePath]);
       await page.getByRole('button');



    })

    
});