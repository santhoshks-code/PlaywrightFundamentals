import {test, expect } from '@playwright/test';

test.describe('Login page', ()=> {

    test('Valid credentgials', async ({page}) => {

        await page.goto ("https://app.thetestingacademy.com/");

    });

    test ('Invalid password', async ({page}) => {
        await page.goto("https://app.thetestingacademy.com/");
    });
})