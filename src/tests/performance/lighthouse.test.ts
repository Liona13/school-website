import lighthouse from 'lighthouse'
import * as chromeLauncher from 'chrome-launcher'
import { expect } from '@jest/globals'

interface LighthouseResults {
  lhr: {
    categories: {
      performance: { score: number };
      accessibility: { score: number };
      'best-practices': { score: number };
      seo: { score: number };
    };
  };
}

interface LighthouseOptions {
  logLevel: 'info' | 'error' | 'warn' | 'verbose' | 'silent';
  output: string;
  port: number;
  onlyCategories: string[];
}

describe('Performance Tests', () => {
  let chrome: chromeLauncher.LaunchedChrome;
  let results: LighthouseResults;

  beforeAll(async () => {
    chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] })
    const options: LighthouseOptions = {
      logLevel: 'info',
      output: 'json',
      port: chrome.port,
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    }

    const runnerResult = await lighthouse('http://localhost:3000', options)
    if (!runnerResult) {
      throw new Error('Lighthouse audit failed')
    }
    results = runnerResult as LighthouseResults
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