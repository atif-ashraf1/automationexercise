// Import Playwright test functions (test runner + assertions)
const { test, expect } = require('@playwright/test');

// Import LoginPage class (Page Object Model for login actions)
const { LoginPage } = require('../pages/loginPage');

// Import helper function to get test user data (email & password)
const { getUser } = require('../utils/helper');


// Define a test case named "Login with registered user"
test('Login with registered user', async ({ page }) => {

  // Create an instance of LoginPage to use its methods
  const login = new LoginPage(page);

  // Get a registered user (email + password) from helper file
  const user = getUser();

  // Open login page using page object method
  await login.navigate();

  // Check if login page text is visible (basic UI verification)
  await expect(page.locator('text=Login to your account')).toBeVisible();

  // Perform login using email and password
  await login.login(user.email, user.password);

  // Verify user is successfully logged in
  await expect(page.locator('text=Logged in as')).toBeVisible();

  // Wait for 5 seconds (used only for debugging, not recommended in real frameworks)
  //await page.waitForTimeout(5000);

  // STEP: Logout from application
  await login.logout();

  // Verify that user is redirected to login page after logout
  await expect(page).toHaveURL(/login/);

  // Wait for 3 seconds (again only for debugging purpose)
  //await page.waitForTimeout(3000);
});
