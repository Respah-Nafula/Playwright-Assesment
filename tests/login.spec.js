import { test, expect } from "@playwright/test";

test("succesful login", async ({ page }) => {
 await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await page.getByPlaceholder("Username").fill("Admin");

  await page.getByPlaceholder("Password").fill("admin123");

  await page.getByRole("button", { name: "Login" }).click();
});
test("unsuccessful login with invalid credentials", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  
  await page.getByPlaceholder("Username").fill("WrongUser");
  await page.getByPlaceholder("Password").fill("WrongPass");


  await page.getByRole("button", { name: "Login" }).click();

  
  await expect(page.getByText("Invalid credentials")).toBeVisible();
});