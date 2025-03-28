// tests/api/retail/items.spec.js
const baseURL = "https://api.retail.com/v1";

test.describe("Retail API", () => {
  test("Should return electronics", async ({ request }) => {
    const response = await request.get(`${baseURL}/items`, {
      params: { category: "electronics" },
    });
    // ... assertions
  });

  test("Should 404 for invalid category", async ({ request }) => {
    const response = await request.get(`${baseURL}/items`, {
      params: { category: "invalid" },
    });
    expect(response.status()).toBe(404);
  });
});
