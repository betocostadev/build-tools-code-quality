// import { initializeCounter } from './counter'

import image from './steve-after-a-workshop.jpg'

const img = document.createElement('img')
img.src = image

document.querySelector('#content').appendChild(img)

import('./counter').then(({ initializeCounter }) => {
  initializeCounter()
})

console.log('Hello from index.js')

document.querySelector('h2').textContent = 'Hello from index.js'
