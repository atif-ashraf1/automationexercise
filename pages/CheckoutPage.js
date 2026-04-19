// Define a class to handle all checkout-related actions
class CheckoutPage {

  // Constructor runs automatically when object is created
  constructor(page) {

    // Store Playwright page instance
    this.page = page;


    // ================= LOGIN ELEMENTS =================

    // Email input field (login section)
    this.loginEmail = page.locator('[data-qa="login-email"]');

    // Password input field (login section)
    this.loginPassword = page.locator('[data-qa="login-password"]');

    // Login button
    this.loginBtn = page.locator('[data-qa="login-button"]');

    // Text showing logged-in user
    this.loggedInUser = page.locator('a:has-text("Logged in as")');


    // ================= PRODUCT SECTION =================

    // All product cards on page
    this.products = page.locator('.product-image-wrapper');

    // Button shown after adding product (popup)
    this.continueShoppingBtn = page.locator('button:has-text("Continue Shopping")');


    // ================= CART SECTION =================

    // Cart navigation link
    this.cartBtn = page.getByRole('link', { name: 'Cart' });

    // Proceed to checkout button
    this.checkoutBtn = page.locator('a:has-text("Proceed To Checkout")');


    // ================= CHECKOUT SECTION =================

    // Address details heading on checkout page
    this.addressDetails = page.locator('h2:has-text("Address Details")');

    // Order review heading
    this.orderReview = page.locator('h2:has-text("Review Your Order")');

    // Comment/message text area
    this.commentBox = page.locator('textarea[name="message"]');

    // Place order button
    this.placeOrderBtn = page.locator('a:has-text("Place Order")');


    // ================= PAYMENT SECTION =================

    // Card holder name input
    this.cardName = page.locator('input[name="name_on_card"]');

    // Card number input
    this.cardNumber = page.locator('input[name="card_number"]');

    // CVC input field
    this.cvc = page.locator('input[name="cvc"]');

    // Expiry month input
    this.expiryMonth = page.locator('input[name="expiry_month"]');

    // Expiry year input
    this.expiryYear = page.locator('input[name="expiry_year"]');

    // Pay button
    this.payBtn = page.locator('[data-qa="pay-button"]');


    // ================= SUCCESS SECTION =================

    // Order success message
    this.successMsg = page.locator('h2:has-text("Order Placed!")');


    // ================= DELETE ACCOUNT =================

    // Delete account button
    this.deleteAccountBtn = page.getByRole('link', { name: 'Delete Account' });

    // Confirmation message after account deletion
    this.accountDeleted = page.locator('[data-qa="account-deleted"]');

    // Continue button after deletion
    this.continueBtn = page.locator('a:has-text("Continue")');
  }


  // ================= LOGIN METHOD =================
  async login(email, password) {

    // Enter email into email field
    await this.loginEmail.fill(email);

    // Enter password into password field
    await this.loginPassword.fill(password);

    // Click login button
    await this.loginBtn.click();
  }


  // ================= ADD PRODUCT =================
  async addProduct(index) {

    // Select product based on index
    const product = this.products.nth(index);

    // Hover over product to reveal add button
    await product.hover();

    // Click first add-to-cart button
    await product.locator('a.add-to-cart').first().click();
  }


  // ================= OPEN CART =================
  async goToCart() {

    // Click on cart link
    await this.cartBtn.click();
  }


  // ================= CHECKOUT =================
  async proceedToCheckout() {

    // Click proceed to checkout button
    await this.checkoutBtn.click();
  }


  // ================= PLACE ORDER =================
  async placeOrder(message) {

    // Enter order comment/message
    await this.commentBox.fill(message);

    // Click place order button
    await this.placeOrderBtn.click();
  }




  // ================= PAYMENT DETAILS =================
  async enterPayment(user) {

    // Fill card holder name
    await this.cardName.fill(user.cardName);

    // Fill card number
    await this.cardNumber.fill(user.cardNumber);

    // Fill CVC code
    await this.cvc.fill(user.cvc);

    // Fill expiry month
    await this.expiryMonth.fill(user.expiryMonth);

    // Fill expiry year
    await this.expiryYear.fill(user.expiryYear);

    // Click pay button to complete payment
    await this.payBtn.click();
  }


  // ================= DELETE ACCOUNT =================
  async deleteAccount() {

    // Click delete account button
    await this.deleteAccountBtn.click();

    // (Optional wait for confirmation or navigation)
    // await this.accountDeleted.waitFor();

    // (Optional continue click handled outside in test)
    // await this.continueBtn.click();
  }
}


// Export class so it can be used in test files
module.exports = { CheckoutPage };  





