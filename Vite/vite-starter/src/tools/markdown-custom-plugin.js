// Markdown plugin

import Markdown from 'markdown-it'
import { readFile } from 'fs/promises'

const md = new Markdown()

const renderMarkdown = async (file) => {
  const content = await readFile(file, 'utf-8')
  return md.render(content)
}

// Cannot be bound to scope, that's why we are not using an arrow function
export function markdownToHtml() {
  return {
    name: 'markdown-to-html',
    resolveId(id) {
      if (id.endsWith('.md')) {
        return id
      }
      return null
    },
    async load(id) {
      if (id.endsWith('.md')) {
        const rendered = await renderMarkdown(id)
        return `export default ${JSON.stringify(rendered)}`
      }
    },
  }
}
