import * as process      from 'process'

import { readdirSync }   from 'fs'
import { writeFileSync } from 'fs'
import { js2xml }        from 'xml-js'

const bootstrap = () => {
  const pages = readdirSync(`${__dirname}/../src/pages`)
  const pageUrls: Array<any> = []
  const struct = {
    urlset: {
      _attributes: {
        xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
        'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
        'xsi:schemaLocation':
          'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd',
      },
      url: pageUrls,
    },
  }

  for (const page of pages.filter((p) => !['_document.tsx', '_app.tsx'].includes(p))) {
    pageUrls.push({
      _attributes: {
        loc: `https://dream-team.tech/${page
          .replace('.tsx', '')
          .replace('.ts', '')
          .replace('index', '')}`,
        lastmod: new Date().toISOString(),
        priority: page === 'index.ts' ? '1.00' : '0.80',
      },
    })
  }

  const xml = js2xml(struct, { compact: true })

  writeFileSync(`${__dirname}/../src/public/sitemap_index.xml`, xml)
}

bootstrap()

process.stdout.write('Done, press CTRL+C')
