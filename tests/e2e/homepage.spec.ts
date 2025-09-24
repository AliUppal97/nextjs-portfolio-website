import { test, expect } from "@playwright/test"

test.describe("Homepage", () => {
  test("should load and display hero section", async ({ page }) => {
    await page.goto("/")

    // Check if hero section is visible
    await expect(page.getByRole("heading", { name: /building exceptional digital experiences/i })).toBeVisible()

    // Check if navigation is present
    await expect(page.getByRole("navigation")).toBeVisible()

    // Check if CTA buttons are present
    await expect(page.getByRole("link", { name: /view my work/i })).toBeVisible()
    await expect(page.getByRole("link", { name: /resume/i })).toBeVisible()
  })

  test("should navigate to projects page", async ({ page }) => {
    await page.goto("/")

    await page.getByRole("link", { name: /view my work/i }).click()

    await expect(page).toHaveURL("/projects")
    await expect(page.getByRole("heading", { name: /my projects/i })).toBeVisible()
  })

  test("should display featured projects", async ({ page }) => {
    await page.goto("/")

    // Check if featured projects section is visible
    await expect(page.getByRole("heading", { name: /featured projects/i })).toBeVisible()

    // Check if at least one project card is visible
    await expect(page.locator('[data-testid="project-card"]').first()).toBeVisible()
  })

  test("should have working theme toggle", async ({ page }) => {
    await page.goto("/")

    // Find and click theme toggle
    const themeToggle = page.getByRole("button", { name: /toggle theme/i })
    await expect(themeToggle).toBeVisible()

    await themeToggle.click()

    // Check if dropdown menu appears
    await expect(page.getByRole("menuitem", { name: /light/i })).toBeVisible()
    await expect(page.getByRole("menuitem", { name: /dark/i })).toBeVisible()
    await expect(page.getByRole("menuitem", { name: /system/i })).toBeVisible()
  })

  test("should be responsive on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto("/")

    // Check if mobile menu button is visible
    await expect(page.getByRole("button", { name: /open main menu/i })).toBeVisible()

    // Check if hero content is still visible and readable
    await expect(page.getByRole("heading", { name: /building exceptional digital experiences/i })).toBeVisible()
  })
})
