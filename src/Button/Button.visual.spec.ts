/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: Button', () => {
  test('Primary', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-button--primary&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Secondary', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-button--secondary&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Polymorphism', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-button--polymorphism&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })
})
