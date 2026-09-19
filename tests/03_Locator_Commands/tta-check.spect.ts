import { test, expect } from "@playwright/test";

test('Verify the Katalon page Login', async ({page}) =>{
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.getByRole('textbox', {name: 'username'}).click();
    await page.getByRole('textbox', {name: 'username'}).fill('John Doe');
    await page.getByRole('textbox', {name: 'password'}).click();
    await page.getByRole('textbox', {name: 'password'}).fill('ThisIsNotAPassword');
    await page.getByTestId('btn-login').click();
    await page.pause();


});

//npx playwright test --project=chromium