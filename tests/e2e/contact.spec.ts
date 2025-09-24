import { test, expect } from "@playwright/test"

test.describe("Contact Page", () => {
  test("should load contact form", async ({ page }) => {
    await page.goto("/contact")

    await expect(page.getByRole("heading", { name: /let's work together/i })).toBeVisible()
    await expect(page.getByRole("textbox", { name: /name/i })).toBeVisible()
    await expect(page.getByRole("textbox", { name: /email/i })).toBeVisible()
    await expect(page.getByRole("textbox", { name: /subject/i })).toBeVisible()
    await expect(page.getByRole("textbox", { name: /message/i })).toBeVisible()
    await expect(page.getByRole("button", { name: /send message/i })).toBeVisible()
  })

  test("should validate form fields", async ({ page }) => {
    await page.goto("/contact")

    // Try to submit empty form
    await page.getByRole("button", { name: /send message/i }).click()

    // Check for validation errors
    await expect(page.getByText(/name must be at least 2 characters/i)).toBeVisible()
    await expect(page.getByText(/please enter a valid email address/i)).toBeVisible()
    await expect(page.getByText(/subject must be at least 5 characters/i)).toBeVisible()
    await expect(page.getByText(/message must be at least 10 characters/i)).toBeVisible()
  })

  test("should fill and submit contact form", async ({ page }) => {
    await page.goto("/contact")

    // Fill out the form
    await page.getByRole("textbox", { name: /name/i }).fill("John Doe")
    await page.getByRole("textbox", { name: /email/i }).fill("john@example.com")
    await page.getByRole("textbox", { name: /subject/i }).fill("Test Subject")
    await page.getByRole("textbox", { name: /message/i }).fill("This is a test message for the contact form.")

    // Submit the form
    await page.getByRole("button", { name: /send message/i }).click()

    // Note: In a real test, you might want to mock the API response
    // For now, we just check that the form submission is attempted
    await expect(page.getByRole("button", { name: /sending/i })).toBeVisible()
  })
})
