// Import Playwright test runner and assertion library
const { test, expect } = require('@playwright/test');

// Import ProductsPage class (handles product actions)
const { ProductsPage } = require('../pages/ProductsPage');

// Import helper function to get product indexes
const { getProductIndexes } = require('../utils/productData');


// Define test case for adding products into cart
test('Test Case 12: Add Products to Cart', async ({ page }) => {

  // Create instance of ProductsPage to access page methods
  const products = new ProductsPage(page);

  // Get product indexes (first and second product)
  const { first, second } = getProductIndexes();


  // STEP 1–3: Open application and navigate to home page
  await products.navigate();

  // Verify user is on correct website
  await expect(page).toHaveURL(/automationexercise/);


  // STEP 4: Go to products page
  await products.goToProducts();


  // STEP 5–6: Add first product to cart
  await products.addProductByIndex(first);

  // Close popup and continue shopping
  await products.continueShopping();


  // STEP 7: Add second product to cart
  await products.addProductByIndex(second);


  // STEP 8: Open cart page to view added products
  await products.viewCart();


  // STEP 9: Verify exactly 2 products are in cart
  await expect(products.cartItems).toHaveCount(2);


  // STEP 10: Validate price, quantity, and total for each product
  const count = await products.cartItems.count();

  // Loop through each cart item row
  for (let i = 0; i < count; i++) {

    // Get price of product at index i
    const price = await products.productPrices.nth(i).innerText();

    // Get quantity of product at index i
    const quantity = await products.productQuantity.nth(i).innerText();

    // Get total price of product at index i
    const total = await products.productTotal.nth(i).innerText();

    // Ensure price is not empty
    expect(price).not.toBe('');

    // Ensure quantity is not empty
    expect(quantity).not.toBe('');

    // Ensure total is not empty
    expect(total).not.toBe('');
  }


  // Wait added for debugging only (not recommended in real framework)
  //await page.waitForTimeout(5000);
});
