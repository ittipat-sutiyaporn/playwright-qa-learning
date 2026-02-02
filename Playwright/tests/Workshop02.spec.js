import {test, expect} from '@playwright/test';
const baseURL = 'https://automate-test.stpb-digital.com/login/';
const Username_login = 'user.test@krupbeam.com';
const Password_login = 'Password123!';

test.beforeEach(async ({page}) => {
    await page.goto(baseURL);
    await page.getByText('Create an account').click();
});

test ('test checkbox interactions', async ({page}) => {
    //// Check
    await page.getByLabel('SQL').check();
    await expect(page.locator('input[name="courses.SQL"]')).toBeChecked();
    let before_checked = await page.locator('input[name="courses.SQL"]').isChecked();
    console.log('Before checked: ' + before_checked);
    //// Uncheck
    await page.getByLabel('SQL').uncheck();
    await expect(page.locator('input[name="courses.SQL"]')).not.toBeChecked();
    let after_checked = await page.locator('input[name="courses.SQL"]').isChecked();
    console.log('After checked: ' + after_checked);
})



test ('test radio button interactions', async ({page}) => {
    await expect(page.locator('input[type="radio"][value="female"]')).not.toBeChecked();
    await expect(page.locator('input[type="radio"][value="male"]')).not.toBeChecked();
    await page.locator('input[type="radio"][value="male"]').check();
    await expect(page.locator('input[type="radio"][value="male"]')).toBeChecked();
    await page.locator('input[type="radio"][value="female"]').check();
    await expect(page.locator('input[type="radio"][value="female"]')).toBeChecked();
})