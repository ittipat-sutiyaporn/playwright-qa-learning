
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';

// ประกาศ Test Case
test('Test Case 1: Register User', async ({ page }) => {
  const homePage = new HomePage(page);

  // เปิดหน้าเว็บ Home (logic การเข้าเว็บถูกซ่อนไว้ใน HomePage)
  await homePage.goto();

  // ตรวจสอบว่า Home page โหลดมาถูกต้อง
  // (เช่น มี heading AutomationExercise)
  await homePage.verifyHome();

  // คลิกปุ่ม Signup / Login
  // action นี้ควรอยู่ใน Page Object ไม่ควรเขียน locator ซ้ำใน test
  await homePage.goToSignupLogin();

  // ตรวจสอบว่าเข้าหน้า Signup แล้วจริง
  await expect(page.getByText('New User Signup!')).toBeVisible();

  // กรอกชื่อผู้ใช้
  // ใช้ data-qa → locator เสถียร เหมาะกับ automation
  await page.locator('[data-qa="signup-name"]').fill('Ittipat1234');

  // กรอก email
  await page.locator('[data-qa="signup-email"]').fill('tt3456784@gmail.com');

  // คลิกปุ่ม Signup
  await page.locator('[data-qa="signup-button"]').click();

  // ตรวจสอบว่าเข้า Step ถัดไป (Enter Account Information)
  await expect(page.getByText('ENTER ACCOUNT INFORMATION')).toBeVisible();

  // เลือกเพศ (radio button)
  await page.locator('#id_gender1').check();

  // กรอกรหัสผ่าน
  await page.locator('[data-qa="password"]').fill('Password123');

});
