import {test, expect} from '@playwright/test';

test('TS01 : ทดสอบการใช้งาน locator', async ({page}) => {

    await page.goto('https://automate-test.stpb-digital.com/login/');
    await expect(page.getByText("Welcome to Kru P' Beam! 👋🏻")).toBeVisible();
    await page.locator('#email').fill('user.test@krupbeam.com'); // ID
    await page.locator('[name="password"]').fill('jKNsrapwLNV7eBN'); // attribute
    await page.locator('#btn-login').click(); // ID 
    await page.waitForTimeout(5000);
});