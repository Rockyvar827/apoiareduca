import { test, expect } from '@playwright/test'

test('no existen enlaces rotos en la web', async ({ page }) => {
  await page.goto('/')

  const links = await page.$$eval('a[href]', anchors =>
    anchors.map(a => a.getAttribute('href'))
  )

  for (const href of links) {
    if (
      !href ||
      href.startsWith('#') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:')
    ) {
      continue
    }

    // Rutas internas SPA
    if (href.startsWith('/')) {
      await page.goto(href)
      await expect(page).not.toHaveURL(/404/)
      continue
    }

    // Enlaces externos
    const response = await page.request.get(href)
    expect(response.status()).toBeLessThan(400)
  }
})
