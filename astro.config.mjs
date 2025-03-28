// @ts-check
import { defineConfig } from 'astro/config'
import relativeLinks from 'astro-relative-links'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'assets',
    format: 'file',
  },
  integrations: [react(), relativeLinks()],
})
