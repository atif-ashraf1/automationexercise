// Create a class for Register page actions and elements
class RegisterPage {
  // Constructor runs automatically when object is created
  constructor(page) {
    this.page = page; // store page object for reuse

    // Consent popup button (accept cookies)
    this.consentBtn = page.getByRole('button', { name: 'Consent' });

    // Home page - Signup/Login button
    this.signupLoginBtn = page.locator('text=Signup / Login');

    // Signup section fields
    this.newUserText = page.locator('text=New User Signup!');
    this.nameInput = page.locator('[data-qa="signup-name"]');
    this.emailInput = page.locator('[data-qa="signup-email"]');
    this.signupBtn = page.locator('[data-qa="signup-button"]');

    // Account information section
    this.accountInfoText = page.locator('text=Enter Account Information');
    this.titleMr = page.locator('#id_gender1'); // select Mr title
    this.password = page.locator('#password'); // password field

    // Date of birth dropdowns
    this.day = page.locator('#days');
    this.month = page.locator('#months');
    this.year = page.locator('#years');

    // Checkboxes
    this.newsletter = page.locator('#newsletter'); // subscribe checkbox
    this.offers = page.locator('#optin'); // special offers checkbox

    // Address fields
    this.firstName = page.locator('#first_name');
    this.lastName = page.locator('#last_name');
    this.company = page.locator('#company');
    this.address = page.locator('#address1');
    this.address2 = page.locator('#address2');
    this.country = page.locator('#country');
    this.state = page.locator('#state');
    this.city = page.locator('#city');
    this.zipcode = page.locator('#zipcode');
    this.mobile = page.locator('#mobile_number');

    // Create account button
    this.createAccountBtn = page.locator('[data-qa="create-account"]');
  }

  // Handle cookie consent popup if it appears
  async handleConsentPopup() {

    // Locate consent button using text
    const consentBtn = this.page.locator('button:has-text("Consent")');

    // Check if button is visible, if "yes", click it
    if (await consentBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
      await consentBtn.click();
    }
  }

  // Open website and handle popup
  async navigate() {
    await this.page.goto('https://automationexercise.com/');
    await this.handleConsentPopup(); // accept cookies if shown
  }

  // Click Signup/Login button
  async goToSignup() {
    await this.signupLoginBtn.click();
  }

  // Enter name and email and submit signup form
  async signup(name, email) {
    await this.nameInput.fill(name); // enter name
    await this.emailInput.fill(email); // enter email
    await this.signupBtn.click(); // click signup button
  }

  // Fill account details section
  async fillAccountDetails(user) {
    await this.titleMr.check(); // select title
    await this.password.fill(user.password); // enter password

    // Select date of birth
    await this.day.selectOption(user.day);
    await this.month.selectOption(user.month);
    await this.year.selectOption(user.year);

    // Select checkboxes
    await this.newsletter.check();
    await this.offers.check();
  }

  // Fill address and personal details
  async fillAddressDetails(user) {
    await this.firstName.fill(user.firstName);
    await this.lastName.fill(user.lastName);
    await this.company.fill(user.company);
    await this.address.fill(user.address);
    await this.address2.fill(user.address2);
    await this.country.selectOption(user.country);
    await this.state.fill(user.state);
    await this.city.fill(user.city);
    await this.zipcode.fill(user.zipcode);
    await this.mobile.fill(user.mobile);
  }

  // Click Create Account button
  async createAccount() {
    await this.createAccountBtn.click();
  }
}

// Export class to use in tests
module.exports = { RegisterPage };
