import { expect, test } from "@playwright/test"

const url = "http://localhost:3000"
test("has title", async ({ page }) => {
  await page.goto(`${url}/auth/login`)

  await expect(page).toHaveTitle("Login Page")
})
