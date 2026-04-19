// Import Playwright test functions
const { test, expect } = require('@playwright/test');

// Import Page Object for registration
const { RegisterPage } = require('../pages/RegisterPage');

// Import function to generate dynamic user data
const { generateUser } = require('../utils/dataGenerator');

// Import helper to save user data for later use (e.g. login test)
const { saveUser } = require('../utils/helper');


// Define the test case
test('Register User', async ({ page }) => {

  // Create object of RegisterPage to use its methods
  const register = new RegisterPage(page);

  // Generate a new user with random data
  const user = generateUser();

  // Open the website
  await register.navigate();

  // Click on Signup/Login button
  await register.goToSignup();

  // Enter name and email, then click Signup
  await register.signup(user.name, user.email);

  // Fill account details like password, DOB, etc.
  await register.fillAccountDetails(user);

  // Fill address details like name, city, phone, etc.
  await register.fillAddressDetails(user);

  // Click Create Account button
  await register.createAccount();

  // Verify that account creation message is visible
  await expect(page.locator('text=Account Created')).toBeVisible();

  // Save user details for future tests (like login)
  saveUser(user);

  //await page.waitForLoadState('domcontentloaded');
});
