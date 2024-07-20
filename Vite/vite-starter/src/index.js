// import { initializeCounter } from './counter'

import image from './steve-after-a-workshop.jpg?h=600&format=webp'

const img = document.createElement('img')
img.src = image

document.querySelector('#content').appendChild(img)

console.log(import.meta)
console.log('Getting the env')
console.log(import.meta.env)

import('./counter').then(({ initializeCounter }) => {
  initializeCounter()
})

console.log('Hello from index.js')

document.querySelector('h2').textContent = 'Hello from index.js'

// JSON Named Exports

// import gandorf from './characters/gandorf.json'
// It exports every key as a single const
// At build it will tree shake what is not used.
import { name } from './characters/gandorf.json'

console.log(`Gandorfs name from the json is: ${name}`)
