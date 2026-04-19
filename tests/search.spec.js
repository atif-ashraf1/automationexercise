// Import Playwright test runner and assertion library
const { test, expect } = require('@playwright/test');

// Import SearchPage class (POM for search functionality)
const { SearchPage } = require('../pages/SearchPage');

// Import test data (list of products to search)
const { getSearchProducts } = require('../utils/searchData');


// Define test case for searching products
test('Search Products', async ({ page }) => {

  // Create instance of SearchPage
  const search = new SearchPage(page);

  // Get list of products to search
  const products = getSearchProducts();


  // Helper function to clean text for comparison
  const normalize = (str) =>
    str.toLowerCase().replace(/[^a-z0-9]/g, '');


  // STEP 1: Open website
  await search.navigate();

  // Verify correct site is loaded
  await expect(page).toHaveURL(/automationexercise/);


  // STEP 2: Go to products page
  await search.goToProducts();

  // Verify "All Products" title is visible
  await expect(search.allProductsTitle).toBeVisible();


  // STEP 3: Loop through all products from test data
  for (const product of products) {

    // Perform search for current product
    await search.searchProduct(product);

    // Verify searched products heading is visible
    await expect(search.searchedProductsTitle).toBeVisible();

    // Get number of search results
    const resultsCount = await search.productNames.count();


    // STEP 4: Validate each search result
    for (let i = 0; i < resultsCount; i++) {

      // Get product name text
      const text = await search.productNames.nth(i).innerText();

      // Compare normalized text with search keyword
      expect(normalize(text)).toContain(normalize(product));
    }


    // STEP 5: Clear search box for next product
    await search.searchInput.fill('');
  }


  // Wait added only for debugging (not recommended in real frameworks)
  //await page.waitForTimeout(3000);
});   




