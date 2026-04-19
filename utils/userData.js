// Function to generate user data for registration and checkout
function generateUser() {

  // Use current timestamp to make username and email unique
  const timestamp = Date.now();

  return {

    // ================= BASIC LOGIN DETAILS =================

    // Create unique username using timestamp
    name: `User${timestamp}`,

    // Create unique email using timestamp
    email: `user${timestamp}@test.com`,

    // Fixed password for testing
    password: "Test@1234",


    // ================= DATE OF BIRTH =================

    // Static values used for simplicity
    day: "10",
    month: "5",
    year: "1995",


    // ================= PERSONAL DETAILS =================

    // First name of user
    firstName: "Test",

    // Last name of user
    lastName: "User",

    // Company name
    company: "TestCompany",


    // ================= ADDRESS DETAILS =================

    // Primary address
    address: "Street 1",

    // Secondary address
    address2: "Area",

    // Country (must match dropdown option)
    country: "India",

    // State name
    state: "State",

    // City name
    city: "City",

    // Postal code
    zipcode: "12345",

    // Mobile number
    mobile: "1234567890",


    // ================= PAYMENT DETAILS =================

    // Name on card
    cardName: "Test User",

    // Dummy card number for testing
    cardNumber: "4111111111111111",

    // Card security code
    cvc: "123",

    // Expiry month
    expiryMonth: "12",

    // Expiry year
    expiryYear: "2030",


    // ================= ORDER MESSAGE =================

    // Message added during checkout
    message: "Please deliver quickly"
  };
}


// Export function so it can be used in test files
module.exports = { generateUser };
