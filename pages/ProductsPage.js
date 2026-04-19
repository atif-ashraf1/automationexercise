/*// Define a class to handle all product-related actions and elements
class ProductsPage {

  // Constructor runs automatically when object is created
  constructor(page) {

    // Store Playwright page instance for reuse
    this.page = page;


    // ================= NAVIGATION =================

    // Products link in header menu
    this.productsBtn = page.getByRole('link', { name: 'Products' });

    // Consent button for cookie popup (if displayed)
    this.consentBtn = page.getByRole('button', { name: 'Consent' });


    // ================= PRODUCT SECTION =================

    // All product cards displayed on products page
    this.products = page.locator('.product-image-wrapper');

    // Button shown after adding product (popup modal)
    this.continueShoppingBtn = page.getByRole('button', { name: 'Continue Shopping' });

    // View Cart link inside popup
    this.viewCartBtn = page.getByRole('link', { name: 'View Cart' });


    // ================= CART VALIDATION =================

    // All product rows inside cart table
    this.cartItems = page.locator('.cart_info tbody tr');

    // Price column of products in cart
    this.productPrices = page.locator('.cart_price p');

    // Quantity column in cart
    this.productQuantity = page.locator('.cart_quantity button');

    // Total price column in cart
    this.productTotal = page.locator('.cart_total_price');
  }


  // ================= HANDLE CONSENT POPUP =================
  async handleConsentPopup() {
    if (await this.consentBtn.isVisible().catch(() => false)) {
      await this.consentBtn.click();
    }
  }


  // ================= OPEN WEBSITE =================
  async navigate() {

    // Open automation exercise homepage
    await this.page.goto('https://automationexercise.com/');

    // Handle cookie popup if it appears
    await this.handleConsentPopup();
  }


  // ================= OPEN PRODUCTS PAGE =================
  async goToProducts() {

    // Click on Products menu link
    await this.productsBtn.click();
    await this.page.waitForURL(/products/);
  }


  // ================= ADD PRODUCT TO CART =================
  async addProductByIndex(index) {

    // Select product based on given index
    const product = this.products.nth(index);

    // Ensure product is visible
    await product.scrollIntoViewIfNeeded();

    // Scroll product into view
    await product.hover();

    // Click "Add to cart" button inside product card
    await product.locator('a.add-to-cart').first().click();

    // Wait for popup to appear
    await this.page.locator('#cartModal').waitFor({ state: 'visible' });
  }


  // ================= CONTINUE SHOPPING =================
  async continueShopping() {

    // Click Continue Shopping button from popup
    await this.continueShoppingBtn.click();

    // Wait until popup disappears
    await this.page.locator('#cartModal').waitFor({ state: 'hidden' });
  }


  // ================= VIEW CART =================
  async viewCart() {

    // Click View Cart link inside popup
    await this.viewCartBtn.click();
    await this.page.waitForURL(/view_cart/);
  }
}


// Export class so it can be reused in test files
module.exports = { ProductsPage };   */



// Define a class to handle all product-related actions and elements
class ProductsPage {

  // Constructor runs automatically when object is created
  constructor(page) {

    // Store Playwright page instance for reuse
    this.page = page;


    // ================= NAVIGATION =================

    // Products link in header menu
    this.productsBtn = page.getByRole('link', { name: 'Products' });

    // Consent button for cookie popup (if displayed)
    this.consentBtn = page.getByRole('button', { name: 'Consent' });


    // ================= PRODUCT SECTION =================

    // All product cards displayed on products page
    this.products = page.locator('.product-image-wrapper');

    // Button shown after adding product (popup modal)
    this.continueShoppingBtn = page.locator('button:has-text("Continue Shopping")');

    // View Cart link inside popup
    this.viewCartBtn = page.locator('u:has-text("View Cart")');


    // ================= CART VALIDATION =================

    // All product rows inside cart table
    this.cartItems = page.locator('.cart_info tbody tr');

    // Price column of products in cart
    this.productPrices = page.locator('.cart_price p');

    // Quantity column in cart
    this.productQuantity = page.locator('.cart_quantity button');

    // Total price column in cart
    this.productTotal = page.locator('.cart_total_price');
  }


  // ================= HANDLE CONSENT POPUP =================
  async handleConsentPopup() {

    // Locate consent button by visible text
    const consentBtn = this.page.locator('button:has-text("Consent")');

    // Check if popup appears within 5 seconds
    if (await consentBtn.isVisible({ timeout: 5000 }).catch(() => false)) {

      // Click consent button if it is visible
      await consentBtn.click();
    }
  }


  // ================= OPEN WEBSITE =================
  async navigate() {

    // Open automation exercise homepage
    await this.page.goto('https://automationexercise.com/');

    // Handle cookie popup if it appears
    await this.handleConsentPopup();
  }


  // ================= OPEN PRODUCTS PAGE =================
  async goToProducts() {

    // Click on Products menu link
    await this.productsBtn.click();
  }


  // ================= ADD PRODUCT TO CART =================
  async addProductByIndex(index) {

    // Select product based on given index
    const product = this.products.nth(index);

    // Scroll product into view
    await product.hover();

    // Click "Add to cart" button inside product card
    await product.locator('a.add-to-cart').first().click();
  }


  // ================= CONTINUE SHOPPING =================
  async continueShopping() {

    // Click Continue Shopping button from popup
    await this.continueShoppingBtn.click();
  }


  // ================= VIEW CART =================
  async viewCart() {

    // Click View Cart link inside popup
    await this.viewCartBtn.click();
  }
}


// Export class so it can be reused in test files
module.exports = { ProductsPage };

