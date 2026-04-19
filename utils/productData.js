/* function getProductIndexes() {
  return {
    first: 0,        // first product
    second: 1        // second product
  };
}

module.exports = { getProductIndexes };   */


/*function getProductIndexes() {

  // Generate a random index for first product (0 or 1)
  const first = Math.floor(Math.random() * 2);

  // Generate a random index for second product (1 to 3)
  // This avoids picking the same product as first in most cases
  const second = Math.floor(Math.random() * 3) + 1;

  return {
    first,   // first product index
    second   // second product index
  };
}

module.exports = { getProductIndexes };     */


// Function to generate two different random product indexes
function getProductIndexes() {

  // Generate first random index between 0 and 3
  const first = Math.floor(Math.random() * 4);

  let second;

  // Keep generating second index until it is different from first
  do {
    second = Math.floor(Math.random() * 4);
  } while (second === first); // ensures both products are not the same


  // Return both indexes as an object
  return { first, second };
}


// Export function so it can be used in test files
module.exports = { getProductIndexes };

