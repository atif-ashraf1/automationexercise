// Function to create a random string of given length
function randomString(length = 5) {

  // Convert random number to base36 (letters + numbers) and take required characters
  return Math.random().toString(36).substring(2, 2 + length);
}


// Function to create a random number with given number of digits
function randomNumber(length = 6) {

  // Generate number between 0 and max value based on length
  return Math.floor(Math.random() * Math.pow(10, length)).toString();
}


// Function to generate a full random user object for testing
function generateUser() {

  // Use current timestamp to make email unique every time
  const timestamp = Date.now();

  return {

    // Generate random username
    name: `User${randomString()}`,

    // Create unique email using timestamp
    email: `user${timestamp}@test.com`,

    // Generate password with random number
    password: `Pass@${randomNumber(4)}`,


    // ================= DATE OF BIRTH =================

    // Random day between 1–28
    day: `${Math.floor(Math.random() * 28) + 1}`,

    // Random month between 1–12
    month: `${Math.floor(Math.random() * 12) + 1}`,

    // Random year between 1970–1999
    year: `${Math.floor(Math.random() * 30) + 1970}`,


    // ================= PERSONAL DETAILS =================

    // Random first name
    firstName: `FN_${randomString()}`,

    // Random last name
    lastName: `LN_${randomString()}`,

    // Random company name
    company: `Company_${randomString()}`,


    // ================= ADDRESS DETAILS =================

    // Random street address
    address: `Street ${randomNumber(3)}`,

    // Secondary address field
    address2: `Area ${randomString(3)}`,

    // Country must match dropdown option exactly
    country: "India",

    // Random state name
    state: `State_${randomString()}`,

    // Random city name
    city: `City_${randomString()}`,

    // 6-digit postal code
    zipcode: randomNumber(6),

    // Mobile number starting with 9 + random digits
    mobile: `9${randomNumber(9)}`
  };
}


// Export function so it can be used in test files
module.exports = { generateUser };
