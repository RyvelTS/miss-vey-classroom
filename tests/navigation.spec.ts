import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("nav links scroll to the correct sections", async ({ page }) => {
    await page.goto("/");

    // Click each desktop nav link and verify the section is visible
    const links = [
      { label: "Why Choose Us", sectionId: "why-choose-us" },
      { label: "Our Courses", sectionId: "courses" },
      { label: "FAQs", sectionId: "faqs" },
    ];

    for (const { label, sectionId } of links) {
      const navLink = page.locator(`#nav-item-${sectionId}`);
      await navLink.click();

      // Wait for smooth scroll to finish
      await page.waitForTimeout(1000);

      const section = page.locator(`#${sectionId}`);
      await expect(section).toBeInViewport();
    }
  });

  test("contact button scrolls to contact form", async ({ page }) => {
    await page.goto("/");

    const contactBtn = page.locator("#nav-contact-btn");
    await contactBtn.click();
    await page.waitForTimeout(1000);

    const contactSection = page.locator("#contact");
    await expect(contactSection).toBeInViewport();
  });

  test("logo click scrolls back to home", async ({ page }) => {
    await page.goto("/");

    // Scroll down first
    await page.locator("#nav-item-faqs").click();
    await page.waitForTimeout(1000);

    // Click logo
    await page.locator("#nav-logo-btn").click();
    await page.waitForTimeout(1000);

    const hero = page.locator("#home");
    await expect(hero).toBeInViewport();
  });
});
