import { test, expect } from '@playwright/test';

const baseURL = 'https://automate-test.stpb-digital.com/login/';
const Username_login = 'user.test@krupbeam.com';
const Password_login = 'Password123!';

let locator_email = '#email';
let locator_password = '[type="password"]';
let locator_btn_login = '#btn-login';
let locator_btn_hide_password = '//*[@id="__next"]/div[1]/div/div/div[2]/div/div/form/div[2]/div/div/button';

test('Validate to login page', async ({ page }) => {
  await page.goto(baseURL);
  await expect(page).toHaveURL('https://automate-test.stpb-digital.com/login/');
  await expect(page.getByText(/Welcome to Kru P'? Beam!/i)).toBeVisible();
  await expect(page.locator(locator_email)).toBeVisible();
  await expect(page.locator(locator_password)).toBeVisible();
  await expect(page.locator(locator_btn_login)).toBeVisible();
  await expect(page.getByRole('link', { name: 'Create an account' })).toBeVisible();
});


test('Validate show name page', async ({ page }) => {
    await page.goto(baseURL);
    await expect(page).toHaveTitle("Kru P' Beam - STPB");
});



test ('Validate the email format is valid', async ({ page }) => {
    await page.goto(baseURL);
    await page.locator(locator_email).fill('user.test@krupbeam.com');
    await expect(page.locator(locator_email)).toHaveValue('user.test@krupbeam.com');
    await expect(page.getByText('email must be a valid email')).not.toBeVisible('email must be a valid email');
});


test ('Validate the email format is invalid', async ({ page }) => {
  await page.goto(baseURL);

  let testdata_invaliad = ['user.krupbeam.com','ไทย','0906586887'];

  for (let  x of testdata_invaliad) {
    await page.locator(locator_email).fill(x);
    await expect(page.locator(locator_email)).toHaveValue(x);
    await page.locator(locator_password).click();
    await expect(page.getByText('email must be a valid email')).toBeVisible('email must be a valid email');

  }
});



test ('Validate the Password format is valid', async ({ page }) => {
  await page.goto(baseURL);
  await page.locator(locator_email).fill('user.test@krupbeam.com');
  await expect(page.locator(locator_email)).toHaveValue('user.test@krupbeam.com');
  await expect(page.getByText('email must be a valid email')).not.toBeVisible('email must be a valid email');
  await page.locator(locator_password).fill('1234567890');
  await expect(page.getByText('password must be at least 5 characters')).not.toBeVisible('password must be at least 5 characters');
});


test ('Validate the Password format is invalid', async ({ page }) => {
await page.goto(baseURL);

let testdata_invaliad = ['123','test'];

for (let  x of testdata_invaliad) {
  await page.locator(locator_email).fill('user.test@krupbeam.com');
  await expect(page.locator(locator_email)).toHaveValue('user.test@krupbeam.com');
  await page.locator(locator_password).fill(x);
  await expect(page.locator(locator_password)).toHaveValue(x);
  await page.locator(locator_btn_login).click();
  await expect(page.getByText('password must be at least 5 characters')).toBeVisible('password must be at least 5 characters');
}
});


test ('Validate button hide password', async ({ page }) => {
  await page.goto(baseURL);
  await page.locator(locator_email).fill('user.test@krupbeam.com');
  await expect(page.locator(locator_email)).toHaveValue('user.test@krupbeam.com');
  await page.locator(locator_password).fill('Password123!');
  await expect(page.locator(locator_password)).toHaveValue('Password123!');
  await page.locator(locator_btn_hide_password).click();
  await expect(page.locator(locator_btn_hide_password)).toBeEnabled();
});



test ('Login: user can sign in with valid credentials', async ({ page }) => {
  await page.goto(baseURL);
  await page.locator(locator_email).fill('user.test@krupbeam.com');
  await expect(page.locator(locator_email)).toHaveValue('user.test@krupbeam.com');
  await page.locator(locator_password).fill('jKNsrapwLNV7eBN');
  await expect(page.locator(locator_password)).toHaveValue('jKNsrapwLNV7eBN');
  await page.locator(locator_btn_login).click();
  await expect(page.getByText('Search Filters')).toBeVisible();
});


test ('Login: user cannot sign in with invalid credentials', async ({ page }) => {
  await page.goto(baseURL);
  await page.locator(locator_email).fill('user.test123@krupbeam.com');
  await expect(page.locator(locator_email)).toHaveValue('user.test123@krupbeam.com');
  await page.locator(locator_password).fill('jKNsrapwLNV7eBNN');
  await expect(page.locator(locator_password)).toHaveValue('jKNsrapwLNV7eBNN');
  await page.locator(locator_btn_login).click();
  await expect(page.getByText('Email or Password is invalid')).toBeVisible();
  await expect(page.getByText('Search Filters')).not.toBeVisible();
});




test ('Login: cannot submit when required fields are empty', async ({ page }) => {
  await page.goto(baseURL);
  await page.locator(locator_btn_login).click();
  await expect(page.getByText('email is a required field')).toBeVisible();
  await expect(page.getByText('password must be at least 5 characters')).toBeVisible();
});



test ('Login: register account link is visible', async ({ page }) => {
  await page.goto(baseURL);
  await page.getByText('Create an account').click();
  await expect(page.getByRole('heading', { name: "Kru P' Beam", level: 6 })).toBeVisible();
});


test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== 'passed') {
    await page.screenshot({
      path: `screenshots/${testInfo.title.replace(/ /g, '_')}.png`,
      fullPage: true,
    });
  }
});
