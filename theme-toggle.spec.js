const { test } = require('playwright/test');

test('theme toggle changes data-theme', async ({ page }) => {
  await page.goto('file:///Users/cdmxx/Documents/TomsTech/index.html');
  const before = await page.locator('html').getAttribute('data-theme');
  const exists = await page.locator('#theme-toggle').count();
  if (exists) {
    await page.click('#theme-toggle');
  }
  const after = await page.locator('html').getAttribute('data-theme');
  console.log(JSON.stringify({ before, after, exists }));
});
