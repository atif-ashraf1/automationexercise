// Import Playwright test runner and assertion library
const { test, expect } = require('@playwright/test');

// Import Page Object Model class for Register page actions
const { RegisterPage } = require('../pages/RegisterPage');

// Import Page Object Model class for Checkout page actions
const { CheckoutPage } = require('../pages/CheckoutPage');

// Import function to generate random user test data
const { generateUser } = require('../utils/userData');


// Define test case for placing order after login/registration
test('Test Case 16: Place Order - Login before Checkout', async ({ page }) => {

  // Create object for RegisterPage to use its methods
  const register = new RegisterPage(page);

  // Create object for CheckoutPage to perform cart and order actions
  const checkout = new CheckoutPage(page);

  // Generate dynamic user data (name, email, card details, etc.)
  const user = generateUser();


  // STEP 1: Open signup page and register new user
  await register.navigate();

  // Move to signup section
  await register.goToSignup();

  // Enter name and email for registration
  await register.signup(user.name, user.email);

  // Fill full account details like password, DOB, etc.
  await register.fillAccountDetails(user);

  // Fill address information like address, city, etc.
  await register.fillAddressDetails(user);

  // Submit registration form to create account
  await register.createAccount();

  // Click continue button after account creation
  await page.locator('a:has-text("Continue")').click();


  // STEP 2: Verify user is logged in after registration
  await expect(checkout.loggedInUser).toBeVisible();


  // STEP 3: Add product to cart (first product index = 0)
  await checkout.addProduct(0);

  // Click continue shopping popup button
  await checkout.continueShoppingBtn.click();


  // STEP 4: Go to cart page
  await checkout.goToCart();

  // Verify cart page URL is correct
  await expect(page).toHaveURL(/view_cart/);


  // STEP 5: Proceed to checkout page
  await checkout.proceedToCheckout();

  // Verify address details section is visible
  await expect(checkout.addressDetails).toBeVisible();

  // Verify order review section is visible
  await expect(checkout.orderReview).toBeVisible();


  // STEP 6: Place order with message/comment
  await checkout.placeOrder(user.message);

  // Enter payment details and complete payment
  await checkout.enterPayment(user);


  // STEP 7: Verify order success page
  await expect(page).toHaveURL(/payment_done/);

  // Confirm success message is displayed
  await expect(checkout.successMsg).toBeVisible();


  // STEP 8: Delete created account
  await checkout.deleteAccount();

  // Verify user is redirected to account deletion page
  await expect(page).toHaveURL(/delete_account/);

  // Confirm account deletion message is visible
  await expect(checkout.accountDeleted).toBeVisible();


  // Click continue after deleting account
  await checkout.continueBtn.click();


  // Small delay added (not recommended in real frameworks)
  //await page.waitForTimeout(3000);
});
