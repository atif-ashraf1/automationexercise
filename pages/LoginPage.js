// Create a class for Login page actions and elements
class LoginPage {

  // Constructor runs automatically when object is created
  constructor(page) {

    // Store Playwright page instance for reuse
    this.page = page;

    // Locator for consent popup button (if shown on site)
    this.consentBtn = page.getByRole('button', { name: 'Consent' });

    // Locator for email input field on login page
    this.emailField = page.locator('[data-qa="login-email"]');

    // Locator for password input field on login page
    this.passwordField = page.locator('[data-qa="login-password"]');

    // Locator for login button
    this.loginBtn = page.locator('[data-qa="login-button"]');

    // Locator for logout button after login
    this.logoutBtn = page.getByRole('link', { name: 'Logout' });
  }


  // Method to handle consent popup if it appears
  async handleConsentPopup() {

    // Find consent button using text
    const consentBtn = this.page.locator('button:has-text("Consent")');

    // Check if button is visible within 5 seconds
    if (await consentBtn.isVisible({ timeout: 5000 }).catch(() => false)) {

      // Click consent button if visible
      await consentBtn.click();
    }
  }


  // Method to open login page
  async navigate() {

    // Go to login URL
    await this.page.goto('https://automationexercise.com/login');

    // Handle popup if it appears after page load
    await this.handleConsentPopup();
  }


  // Method to perform login action
  async login(email, password) {

    // Enter email into email field
    await this.emailField.fill(email);

    // Enter password into password field
    await this.passwordField.fill(password);

    // Click login button
    await this.loginBtn.click();
  }


  // Method to logout from application
  async logout() {

    // Click logout button
    await this.logoutBtn.click();
  }
}

// Export LoginPage class so it can be used in test files
module.exports = { LoginPage };
