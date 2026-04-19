// Import Playwright test framework and assertion library
const { test, expect } = require('@playwright/test');

// Import CartPage class (handles cart-related actions)
const { CartPage } = require('../pages/CartPage');

// Import helper function to get product indexes dynamically
const { getProductIndexes } = require('../utils/productData');


// Define test case for removing products from cart
test('Remove Products From Cart', async ({ page }) => {

  // Create object of CartPage to use its methods
  const cart = new CartPage(page);

  // Get dynamic product indexes (first and second product)
  const { first, second } = getProductIndexes();


  // STEP 1–2: Open browser and navigate to website
  await cart.navigate();

  // Verify correct website is loaded
  await expect(page).toHaveURL(/automationexercise/);


  // STEP 3–4: Go to products page
  await cart.goToProducts();


  // Add first product to cart
  await cart.addProductByIndex(first);

  // Close popup and continue shopping
  await cart.continueShopping();


  // Add second product to cart
  await cart.addProductByIndex(second);


  // STEP 5: Open cart page using View Cart popup
  await cart.viewCart();


  // Debug step: check how many items are in cart
  const count = await cart.cartItems.count();
  console.log("Cart count:", count);


  // STEP 6: Verify that 2 products are added in cart
  await expect(cart.cartItems).toHaveCount(2);


  // STEP 7: Remove first product from cart
  await cart.removeFirstProduct();


  // STEP 8: Verify only 1 product remains after deletion
  await expect(cart.cartItems).toHaveCount(1);


  // Wait added only for debugging (not recommended in real framework)
  //await page.waitForTimeout(5000);
});
