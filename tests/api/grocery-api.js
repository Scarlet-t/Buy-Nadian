// tests/api/grocery-items.spec.js
const { test, expect } = require("@playwright/test");

test("Fetch grocery items from API", async ({ request }) => {
  const response = await request.get("https://api.grocery.com/items", {
    params: {
      category: "produce",
      limit: 50,
    },
  });

  expect(response.ok()).toBeTruthy();
  const items = await response.json();

  // Validate response
  expect(items.length).toBeGreaterThan(0);
  expect(items[0]).toHaveProperty("id");
  expect(items[0]).toHaveProperty("price");
});
