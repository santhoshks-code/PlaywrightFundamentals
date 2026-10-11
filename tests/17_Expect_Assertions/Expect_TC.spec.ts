import {test, expect } from '@playwright/test';
import path from 'path';

test.describe("Assertions", ()=> {

    test.beforeEach(async ({page}) => {

        await page.goto('https://app.thetestingacademy.com/playwright/')

    });

    test ('Expect Asserions', async ({page}) =>{

        expect(1+2).toBe(3);
        let ac = false;
        expect(ac).toBeFalsy();
        expect(true).toBeTruthy();
        expect(null).toBeNull();
        expect(34).toBeGreaterThan(11);
        expect([1,2,3]).toBe([1,2,3]);
        expect({role: 'admin'}).toBe({role: 'admin'});

    })

});