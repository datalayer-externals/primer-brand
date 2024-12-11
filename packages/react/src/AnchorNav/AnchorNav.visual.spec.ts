/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: AnchorNav', () => {
  test('AnchorNav / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-anchornav--default&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })

  test('AnchorNav / Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-anchornav--playground&viewMode=story')

    await page.waitForTimeout(2000)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })

  test('AnchorNav / Fewer anchor links', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-anchornav-features--fewer-anchor-links&viewMode=story',
    )

    await page.waitForTimeout(2000)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })

  test('AnchorNav / Shorter labels', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-anchornav-features--shorter-labels&viewMode=story',
    )

    await page.waitForTimeout(2000)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })

  test('AnchorNav / Longer labels', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-anchornav-features--longer-labels&viewMode=story',
    )

    await page.waitForTimeout(2000)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })

  test('AnchorNav / Custom Background', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-anchornav-features--custom-background&viewMode=story',
    )

    await page.waitForTimeout(2000)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })

  // eslint-disable-next-line i18n-text/no-en
  test.describe('Mobile viewport test for Narrow view, menu closed (mobile)', () => {
    test.use({viewport: {width: 360, height: 800}})
    test('AnchorNav / Narrow view, menu closed (mobile)', async ({page}) => {
      await page.goto(
        'http://localhost:6006/iframe.html?args=&id=components-anchornav-features--narrow-view&viewMode=story',
      )

      await page.waitForTimeout(2000)
      expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
    })
  })

  // eslint-disable-next-line i18n-text/no-en
  test.describe('Mobile viewport test for Narrow view, menu open (mobile)', () => {
    test.use({viewport: {width: 360, height: 800}})
    test('AnchorNav / Narrow view, menu open (mobile)', async ({page}) => {
      await page.goto(
        'http://localhost:6006/iframe.html?args=&id=components-anchornav-features--narrow-view-menu-open&viewMode=story',
      )

      await page.waitForTimeout(2000)
      expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
    })
  })

  // eslint-disable-next-line i18n-text/no-en
  test.describe('Tablet viewport test for Regular view, menu closed (tablet)', () => {
    test.use({viewport: {width: 834, height: 1112}})
    test('AnchorNav / Regular view, menu closed (tablet)', async ({page}) => {
      await page.goto(
        'http://localhost:6006/iframe.html?args=&id=components-anchornav-features--regular-view&viewMode=story',
      )

      await page.waitForTimeout(2000)
      expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
    })
  })

  // eslint-disable-next-line i18n-text/no-en
  test.describe('Tablet viewport test for Regular view, menu open (tablet)', () => {
    test.use({viewport: {width: 834, height: 1112}})
    test('AnchorNav / Regular view, menu open (tablet)', async ({page}) => {
      await page.goto(
        'http://localhost:6006/iframe.html?args=&id=components-anchornav-features--regular-view-menu-open&viewMode=story',
      )

      await page.waitForTimeout(2000)
      expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
    })
  })
  test('AnchorNav / Hide until sticky', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-anchornav-features--hide-until-sticky&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })
})
