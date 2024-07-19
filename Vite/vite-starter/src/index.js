// import { initializeCounter } from './counter'

import('./counter').then(({ initializeCounter }) => {
  initializeCounter()
})

console.log('Hello from index.js')

document.querySelector('h2').textContent = 'Hello from index.js'
