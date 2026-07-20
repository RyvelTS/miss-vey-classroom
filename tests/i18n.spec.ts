import { test, expect } from "@playwright/test";

test.describe("Internationalization", () => {
  test("switches language and updates content", async ({ page }) => {
    await page.goto("/");

    // Check default English
    await expect(page.locator("text=Why Choose Us").first()).toBeVisible();

    // Switch to Indonesian
    await page.locator("button").filter({ hasText: "ID" }).first().click();
    await page.waitForTimeout(500);

    // Content should change
    await expect(page.locator("text=Mengapa Kami").first()).toBeVisible();

    // Switch to Chinese
    await page.locator("button").filter({ hasText: "中文" }).first().click();
    await page.waitForTimeout(500);

    await expect(page.locator("text=办学特色").first()).toBeVisible();

    // Switch back to English
    await page.locator("button").filter({ hasText: "EN" }).first().click();
    await page.waitForTimeout(500);

    await expect(page.locator("text=Why Choose Us").first()).toBeVisible();
  });

  test("html lang attribute updates on language switch", async ({ page }) => {
    await page.goto("/");

    // Default
    await expect(page.locator("html")).toHaveAttribute("lang", "en");

    // Indonesian
    await page.locator("button").filter({ hasText: "ID" }).first().click();
    await page.waitForTimeout(500);
    await expect(page.locator("html")).toHaveAttribute("lang", "id");

    // Chinese
    await page.locator("button").filter({ hasText: "中文" }).first().click();
    await page.waitForTimeout(500);
    await expect(page.locator("html")).toHaveAttribute("lang", "zh");
  });
});
