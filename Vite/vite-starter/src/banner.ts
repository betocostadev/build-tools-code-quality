// import { bannerText } from './banner.module.css' // Removed since changed to TypeScript

export const addBanner = (text: string) => {
  const container = document.querySelector('#content') as HTMLDivElement
  // container.classList.add(JSON.stringify(bannerText))
  container.textContent = text
}
