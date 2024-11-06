import { test, expect } from '@playwright/test'
import percySnapshot from '@percy/playwright'

test.describe('Visual Regression Tests', () => {
  test('Homepage visual regression', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await percySnapshot(page, 'Homepage')
  })

  test('Mobile menu visual regression', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.click('button[aria-label="Menu"]')
    await percySnapshot(page, 'Mobile Menu Open')
  })

  test('News section hover states', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.hover('article:first-child')
    await percySnapshot(page, 'News Card Hover')
  })

  test('Contact section responsive layout', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.setViewportSize({ width: 375, height: 812 }) // iPhone X
    await percySnapshot(page, 'Contact Section Mobile')
    await page.setViewportSize({ width: 1440, height: 900 }) // Desktop
    await percySnapshot(page, 'Contact Section Desktop')
  })
}) 