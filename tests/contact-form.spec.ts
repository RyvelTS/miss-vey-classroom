import { test, expect } from "@playwright/test";

test.describe("Contact Form", () => {
  test("renders the contact form", async ({ page }) => {
    await page.goto("/");

    const contactSection = page.locator("#contact");
    await contactSection.scrollIntoViewIfNeeded();

    await expect(page.locator('input[name="parentName"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
  });

  test("shows validation errors on empty submit", async ({ page }) => {
    await page.goto("/");

    await page.locator("#contact").scrollIntoViewIfNeeded();

    const submitBtn = page.locator("#contact").getByRole("button", {
      name: /submit|booking|kirim|提交/i,
    });
    await submitBtn.click();

    // HTML5 validation should prevent submission
    // Check that required fields have validation feedback
    const parentName = page.locator('input[name="parentName"]');
    await expect(parentName).toHaveJSProperty("validity.valid", false);
  });

  test("honeypot field is hidden", async ({ page }) => {
    await page.goto("/");

    await page.locator("#contact").scrollIntoViewIfNeeded();

    // The honeypot field should be visually hidden or off-screen
    const honeypot = page.locator('input[name="honeypot"], [data-honeypot]');
    if (await honeypot.count() > 0) {
      await expect(honeypot).toBeHidden();
    }
  });
});
