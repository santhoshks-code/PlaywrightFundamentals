import {test, expect, Locator  } from "@playwright/test";

test.describe('Javascrip Alerts', ()=> {
    test.beforeEach(async({page}) =>{
        await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    test('JS Alert accpet 1', async ({page}) => {
        page.once('dialog', async dialog =>{
            await dialog.accept();
        });

        await page.getByRole('button', { name: "click for JS Alert"}).click();
        page.once('dialog2', async dialog2 =>{
            console.log('Alert type:', dialog2.type());
            console.log('Alert message', dialog2.message);
            expect(dialog2.message()).toBe('I am JS connector');
            await dialog2.accept();
        })
;



})
    test('JS Alert accpet 2', async ({page}) => {
    test('JS Alert accpet 2', async ({page}) => {

    });