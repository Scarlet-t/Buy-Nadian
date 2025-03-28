// tests/api/auth.setup.js
import { test as setup } from "@playwright/test";

setup("authenticate", async ({ request }) => {
  const response = await request.post("/auth", {
    data: {
      username: "testuser",
      password: process.env.API_PASSWORD,
    },
  });

  const { token } = await response.json();
  process.env.AUTH_TOKEN = token;
});
