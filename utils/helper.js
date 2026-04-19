// Import built-in file system module from Node.js
const fs = require('fs');


// Function to save user data into a JSON file
function saveUser(user) {

  // Convert user object into JSON format and write it to file
  // 'null, 2' makes the file readable with proper spacing
  fs.writeFileSync('user.json', JSON.stringify(user, null, 2));
}


// Function to read user data from JSON file
function getUser() {

  // Read file content (user.json)
  const data = fs.readFileSync('user.json');

  // Convert JSON string back into JavaScript object
  return JSON.parse(data);
}


// Export both functions so they can be used in other files
module.exports = { saveUser, getUser };
