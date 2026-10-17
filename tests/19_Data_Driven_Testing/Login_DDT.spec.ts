import { test, expect } from '@playwright/test';
import loginData from './Test-Data/Login.json';


test.describe("Login - Data driven", () => {
    
    test.beforeEach(async ({page}) => {
        await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    })
   
    test("Login with valid user", async({page}) => {
        await page.locator("#email").fill(loginData.validUser.email);
        await page.locator("#password").fill(loginData.validUser.password);
        await page.getByTestId("login-button").click();

    })

})