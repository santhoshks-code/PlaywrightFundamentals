import { test, expect } from '@playwright/test';

test('Verify login button locator', async ({page})=>{

    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    let Mainbutton = page.getByRole('link', { name: "Make Appointment, exact: true"});
    Mainbutton.click();
    page.pause();

});