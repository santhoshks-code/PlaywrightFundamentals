import {test, expect } from '@playwright/test';
import { TIMEOUT } from 'node:dns';

test ('tc#1 -Verify the Vwo page is loaded', async({page})=>{
   
    page.goto("https://app.wingify.com/#/login");
    waituntil: 'DOMContentLoaded';
    timeout: 3000;

    let userNameField = page.locator("#login-username");
    let passwordField = page.locator("#login-password");
    let loginButton = page.locator("#js-login-btn");

    await userNameField.fill("abc@gmail.com");
    await passwordField.fill("password1234");
    await loginButton.click();

    let errorMessage = page.locator("#js-notification-box");

    // await expect(errorMessage) (Actual: "Your email, password, IP address or location did not match"

    await page.pause(); 
});

//npx playwright show report
//npx playwright codegen https://katalon-demo-cura.herokupp.com/