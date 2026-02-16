// playwright test for Redbus search bus page
// This script automates the search for buses on Redbus using Playwright and JavaScript


const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

test('Redbus Search Bus Page', async () => {
  // Launch browser in headed mode
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Go to Redbus homepage
  await page.goto('https://www.redbus.in/');

  // Enter source city
  await page.waitForTimeout(1000);
  page.frame(1).waitForSelector('#srcinput'); // Wait for the "From" field to be visible
 await page.click('[id="srcinput"]'); // Click the "From" field
await page.fill('#input[type="text"]', 'Bangalore'); // Fill the city name
  await page.waitForTimeout(1000); // Wait for suggestions to appear
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  await browser.close();
});
