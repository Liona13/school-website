import lighthouse from 'lighthouse'
import * as chromeLauncher from 'chrome-launcher'
import { expect } from '@jest/globals'

describe('Performance Tests', () => {
  let chrome: any
  let results: any

  beforeAll(async () => {
    chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] })
    const options = {
      logLevel: 'info',
      output: 'json',
      port: chrome.port,
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    }

    results = await lighthouse('http://localhost:3000', options)
  }, 30000)

  afterAll(() => {
    chrome.kill()
  })

  test('Performance score is above 90', () => {
    expect(results.lhr.categories.performance.score * 100).toBeGreaterThanOrEqual(90)
  })

  test('Accessibility score is above 90', () => {
    expect(results.lhr.categories.accessibility.score * 100).toBeGreaterThanOrEqual(90)
  })

  test('Best practices score is above 90', () => {
    expect(results.lhr.categories['best-practices'].score * 100).toBeGreaterThanOrEqual(90)
  })

  test('SEO score is above 90', () => {
    expect(results.lhr.categories.seo.score * 100).toBeGreaterThanOrEqual(90)
  })
}) 