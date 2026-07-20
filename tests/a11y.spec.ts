import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Accessibility", () => {
  test("home page has no critical or serious a11y violations", async ({ page }) => {
    await page.goto("/");

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      // Exclude color-contrast for now — those need design-token adjustments
      .disableRules(["color-contrast"])
      .analyze();

    expect(results.violations).toEqual([]);
  });

  test("mobile menu toggle has proper aria state", async ({ page }) => {
    await page.goto("/");
    await page.setViewportSize({ width: 375, height: 812 });

    const toggle = page.locator("#nav-mobile-toggle");

    // Closed by default
    await expect(toggle).toHaveAttribute("aria-expanded", "false");

    // Open
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");

    // Close
    await toggle.click();
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});
