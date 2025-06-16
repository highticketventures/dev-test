import { test, expect } from '@playwright/test'

test.describe('HTV Request Hub', () => {
  test('should load homepage', async ({ page }) => {
    await page.goto('/')
    
    await expect(page).toHaveTitle(/HTV Request Hub/)
    await expect(page.locator('h1')).toContainText('HTV Request Hub')
  })

  test('should show sign in button when not authenticated', async ({ page }) => {
    await page.goto('/')
    
    await expect(page.locator('text=Get Started')).toBeVisible()
  })

  // TODO: Add more comprehensive tests
  // - Authentication flow
  // - Request creation
  // - Real-time updates
  // - Multi-tenant data isolation
})