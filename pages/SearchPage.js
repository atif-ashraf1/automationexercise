// Define a class to handle all search-related actions and elements
class SearchPage {

  // Constructor runs automatically when object is created
  constructor(page) {

    // Store Playwright page instance
    this.page = page;


    // ================= CONSENT POPUP =================

    // Consent button (cookie popup if shown)
    this.consentBtn = page.getByRole('button', { name: 'Consent' });


    // ================= NAVIGATION =================

    // Products menu link in header
    this.productsBtn = page.getByRole('link', { name: 'Products' });

    // Heading shown on products page
    this.allProductsTitle = page.locator('h2:has-text("All Products")');


    // ================= SEARCH SECTION =================

    // Search input field
    this.searchInput = page.locator('#search_product');

    // Search button
    this.searchBtn = page.locator('#submit_search');


    // ================= RESULTS SECTION =================

    // Heading for searched results section
    this.searchedProductsTitle = page.locator('h2:has-text("Searched Products")');

    // Product names displayed in search results
    this.productNames = page.locator('.productinfo p');
  }


  // ================= HANDLE CONSENT POPUP =================
  async handleConsentPopup() {

    // Locate consent button using text
    const consentBtn = this.page.locator('button:has-text("Consent")');

    // Check if popup appears within 5 seconds
    if (await consentBtn.isVisible({ timeout: 5000 }).catch(() => false)) {

      // Click consent button if visible
      await consentBtn.click();
    }
  }


  // ================= OPEN WEBSITE =================
  async navigate() {

    // Open application homepage
    await this.page.goto('https://automationexercise.com/');

    // Handle cookie popup if present
    await this.handleConsentPopup();
  }


  // ================= GO TO PRODUCTS PAGE =================
  async goToProducts() {

    // Click on Products menu link
    await this.productsBtn.click();
  }


  // ================= SEARCH PRODUCT =================
  async searchProduct(productName) {

    // Enter product name into search box
    await this.searchInput.fill(productName);

    // Click search button to get results
    await this.searchBtn.click();
  }
}


// Export class so it can be used in test files
module.exports = { SearchPage };  



