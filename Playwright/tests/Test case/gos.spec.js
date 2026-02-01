import { test, expect } from '@playwright/test';

test ('Test Case 1: Register User', async ({ page }) => {
    const email = `git${Date.now()}@gmail.com`;
    await page.goto('https://automationexercise.com/', {
        waitUntil: 'domcontentloaded',
        timeout: 10_000,
      }); 
    // click on "post" link 
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.getByRole('textbox', { name: 'Name' }).click();
    await page.getByRole('textbox', { name: 'Name' }).fill('GoIT');
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
    //await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('GIT1242@gmail.com');
    await page
    .locator('form')
    .filter({ hasText: 'Signup' })
    .getByPlaceholder('Email Address')
    .fill(email);   // 👈 ใช้ตรงนี้

    await page.getByRole('button', { name: 'Signup' }).click();
    await page.locator('#uniform-id_gender1').click();
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill('123456');
    await page.locator('#days').selectOption('15');
    await page.locator('#months').selectOption('8');
    await page.locator('#years').selectOption('2013');
    await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
    await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
    await page.getByRole('textbox', { name: 'First name *' }).click();
    await page.getByRole('textbox', { name: 'First name *' }).fill('GOS999');
    await page.getByRole('textbox', { name: 'Last name *' }).click();
    await page.getByRole('textbox', { name: 'Last name *' }).fill('SUTI888');
    await page.getByRole('textbox', { name: 'Company', exact: true }).click();
    await page.getByRole('textbox', { name: 'Company', exact: true }).fill('Axonstech');
    await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).click();
    await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('232/22');
    await page.getByRole('textbox', { name: 'Address 2' }).click();
    await page.getByRole('textbox', { name: 'Address 2' }).fill('678/315');
    await page.getByLabel('Country *').selectOption('Canada');
    await page.getByRole('textbox', { name: 'State *' }).click();
    await page.getByRole('textbox', { name: 'State *' }).fill('85236/666');
    await page.getByRole('textbox', { name: 'City * Zipcode *' }).click();
    await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('BKK');
    await page.locator('#zipcode').click();
    await page.locator('#zipcode').fill('-');
    await page.getByRole('textbox', { name: 'Mobile Number *' }).click();
    await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('6005550000');
    await page.getByRole('button', { name: 'Create Account' }).click();
    await expect(page.getByText('Account Created!')).toBeVisible();
    await page.getByRole('link', { name: 'Continue' }).click();
    // await page.locator('iframe[name="aswift_2"]').contentFrame().getByRole('button', { name: 'Close ad' }).click();

    //delay 10 sceconds   
    await page.waitForTimeout(5000)
    //await expect(page.getByText('You can now take advantage of')).toBeVisible();
    await expect(page.getByRole('link', { name: ' Logout' })).toBeVisible();
    await expect(page).toHaveTitle(/Automation Exercise/)

});

