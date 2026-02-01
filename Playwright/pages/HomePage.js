export class HomePage {
    constructor(page) {
      this.page = page;
    }
    async HomePage (user) {
        await expect(this.page.getByText('Automation')).toBeVisible();
        await expect(this.page.getByText('Test Cases')).toBeVisible();
        await expect(this.page.getByText('APIs list for practice')).toBeVisible();
    }



  }
  