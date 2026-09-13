import { test, expect } from '@playwright/test';

test ('Context with options', async ({browser}) => {
    const context = await browser.newContext({
    viewport: { width: 1920, height: 1000 },
    locale: 'fr-FR',
    timezoneId: 'Europe/Paris',
    geolocation: {latitude: 48.456, longitude: 23.7653},
    permissions: ['geolocation'],

});

const page = await context.newPage();
await page.goto("https://app.vmo.com/#login");
await context.close();

});