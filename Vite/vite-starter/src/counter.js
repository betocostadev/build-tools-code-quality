import { addBanner } from './banner'

export const initializeCounter = (doc = globalThis.document) => {
  const countElement = doc.getElementById('count')
  const incrementButton = doc.getElementById('increment')
  const decrementButton = doc.getElementById('decrement')

  let count = 0

  const render = () => {
    countElement.textContent = count

    // This import will only happen after the condition is met
    // By default the import is a promise
    // If you check the dev tools you'll see it being loaded after the condition is met
    if (count < 0) {
      //   import('./banner').then(({ addBanner }) => {
      addBanner("You're below zero!")
      //   })
    }
  }

  const increment = () => {
    count++
    render()
  }

  const decrement = () => {
    count--
    render()
  }

  incrementButton.addEventListener('click', increment)
  decrementButton.addEventListener('click', decrement)

  render()

  return () => {
    incrementButton.removeEventListener('click', increment)
    decrementButton.removeEventListener('click', decrement)
  }
}
