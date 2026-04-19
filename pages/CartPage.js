// Define a class to manage cart-related actions and elements
class CartPage {

  // Constructor runs when object is created
  constructor(page) {

    // Store Playwright page instance
    this.page = page;


    // ================= CONSENT POPUP =================

    // Consent button locator (cookie popup or consent modal)
    this.consentBtn = page.getByRole('button', { name: 'Consent' });


    // ================= NAVIGATION =================

    // Products menu button in header
    this.productsBtn = page.getByRole('link', { name: 'Products' });

    // Cart button in header
    this.cartBtn = page.getByRole('link', { name: 'Cart' });


    // ================= PRODUCT SECTION =================

    // All product cards on products page
    this.products = page.locator('.product-image-wrapper');


    // ================= CART SECTION =================

    // All product rows in cart table
    this.cartItems = page.locator('.cart_info tbody tr');


    // Remove (X) button for products in cart
    this.removeBtn = page.locator('.cart_quantity_delete');
  }


  // ================= HANDLE CONSENT POPUP =================
  async handleConsentPopup() {

    // Locate consent button by text
    const consentBtn = this.page.locator('button:has-text("Consent")');

    // Check if popup is visible within 5 seconds
    if (await consentBtn.isVisible({ timeout: 5000 }).catch(() => false)) {

      // Click consent button if it appears
      await consentBtn.click();
    }
  }


  // ================= OPEN WEBSITE =================
  async navigate() {

    // Open application URL
    await this.page.goto('https://automationexercise.com/');

    // Handle cookie/consent popup if it appears
    await this.handleConsentPopup();
  }


  // ================= OPEN PRODUCTS PAGE =================
  async goToProducts() {

    // Click Products link in header menu
    await this.productsBtn.click();
  }


  // ================= ADD PRODUCT TO CART =================
  async addProductByIndex(index) {

    // Select product based on given index
    const product = this.products.nth(index);

    // Scroll product into view
    await product.scrollIntoViewIfNeeded();

    // Hover over product to show "Add to cart" button
    await product.hover();

    // Locate add-to-cart button inside product card
    const addBtn = product.locator('.add-to-cart').first();

    // Click add to cart button
    await addBtn.click();

    // Wait for confirmation modal to appear
    await this.page.locator('#cartModal').waitFor({ state: 'visible' });
  }


  // ================= CONTINUE SHOPPING =================
  async continueShopping() {

    // Locate Continue Shopping button
    const btn = this.page.getByRole('button', { name: 'Continue Shopping' });

    // Wait until button is visible
    await btn.waitFor({ state: 'visible' });

    // Click the button
    await btn.click();

    // Wait until popup disappears
    await this.page.locator('#cartModal').waitFor({ state: 'hidden' });
  }


  // ================= VIEW CART =================
  async viewCart() {

    // Click View Cart link from popup
    await this.page.getByRole('link', { name: 'View Cart' }).click();
  }


  // ================= OPEN CART FROM HEADER =================
  async openCart() {

    // Click cart icon in header
    await this.cartBtn.click();
  }


  // ================= REMOVE PRODUCT =================
  async removeFirstProduct() {

    // Click first remove (X) button in cart
    await this.removeBtn.first().click();
  }
}


// Export class so it can be used in test files
module.exports = { CartPage };

