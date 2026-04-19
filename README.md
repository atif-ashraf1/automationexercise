# Playwright Automation – Test Suite

## Overview

This project contains an automated test suite built with **Playwright (JavaScript)** using the **Page Object Model (POM)**. It validates key user flows on:
[https://automationexercise.com/](https://automationexercise.com/)

---

## Scope Selection (User Journeys)

Out of the six user journeys available, four have been picked for automation.

### Selected Journeys

1. User Registration (dynamic data)
2. Login with valid credentials
3. Product Search & Add to Cart
4. Place Order (End-to-End Checkout Flow)

### Why these four were selected

These journeys were chosen because they cover the most important parts of the application that a real user will use often. Together, they represent the main flow from starting on the site to completing a purchase.

* They focus on core features like signup, login, browsing products, and checkout.
* These flows are used frequently by users, so they are important to test.
* They help validate the full shopping experience in one complete path.
* They are more stable and suitable for automation compared to smaller or edge-case scenarios.

---

## Tech Stack

* Playwright (JavaScript)
* Node.js
* Page Object Model (POM)

---

## Structure

```
├── pages/ # Page classes (locators + actions)
├── tests/ # Test scenarios
├── utils/ # Test data & helpers
└── README.md
```

---

## Covered Scenarios

* User Registration (dynamic data)
* Login with valid credentials
* Product Search
* Add products to cart
* Remove product from cart
* Place order (end-to-end)

---

## Test Data

* User data is generated dynamically
* Product selection uses semi-random indexes

---

## Design Approach

* POM used for separation of concerns
* Reusable methods for maintainability
* Conditional handling for popups and modals

---

## Run Tests

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npx playwright test
```

Run in UI mode:

```bash
npx playwright test --headed
```

---

## Notes

* Avoids hard waits; uses element-based synchronization
* Handles real UI issues (ads, popups, modals)
* Focus on stable and realistic test execution

---

## Improvements

* CI/CD integration
* Reporting (Allure/HTML)
* Extended test coverage

---

## Author

Atif Ashraf
QA Engineer

# automationexercise
