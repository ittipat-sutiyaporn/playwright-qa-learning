/**
 * ================================
 * Playwright Run Commands Cheat Sheet
 * ================================
 *
 * # รันทุกเทส
 * npx playwright test
 *
 * # รันเฉพาะไฟล์
 * npx playwright test tests/login.spec.ts
 *
 * # รันทั้งโฟลเดอร์
 * npx playwright test tests/smoke
 *
 * # รันตามชื่อ test
 * npx playwright test -g "login"
 *
 * # เปิด browser ให้ดู (headed)
 * npx playwright test --headed
 *
 * # โหมด UI (เลือก test คลิก Run ได้)
 * npx playwright test --ui
 *
 * # Debug mode (หยุดทีละ step)
 * npx playwright test --debug
 *
 * # ใช้ config อื่น
 * npx playwright test -c playwright.staging.config.ts
 *
 * # ตั้งค่า environment
 * BASE_URL=http://localhost:5173 npx playwright test
 *
 * # เลือก browser
 * npx playwright test --project=chromium
 * npx playwright test --project=firefox
 *
 * # จำกัดจำนวน worker
 * npx playwright test --workers=2
 *
 * # ตั้ง retry
 * npx playwright test --retries=2
 *
 * # เปิดรายงานผล
 * npx playwright show-report
 *
 * # เปิด trace ของ test ที่ fail
 * npx playwright show-trace trace.zip
 */
