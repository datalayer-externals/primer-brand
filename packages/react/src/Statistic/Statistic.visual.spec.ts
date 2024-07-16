/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: Statistic', () => {
  test('Statistic / Boxed Variant', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-statistic-features--boxed-variant&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Statistic / No Description', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-statistic-features--no-description&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Statistic / Sizes', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-statistic-features--sizes&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Statistic / Custom Heading Size', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-statistic-features--custom-heading-size&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Statistic / Padding', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-statistic-features--padding&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Statistic / Accent Description', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-statistic-features--accent-description&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Statistic / Custom Footnote', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-statistic-features--custom-footnote&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Statistic / Custom Intro', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-statistic-features--custom-intro&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Statistic / Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-statistic--playground&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Statistic / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-statistic--default&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })
})