// the most fundamental test

/*

write a test that reveals the bug.
Write code that throws an error with a helpful message about the bug,
but only if there's a bug.
So... if (calling sum with some numbers doesn't return the right thing) {
  then throw an error with a helpful message
}

Then run this code with `node 1.todo`

> Make sure you're in the right directory!

Bonus, write another test that would throw an
error if the subtract function were to have a bug

*/

// sum is intentionally broken so you can see errors in the tests
const sum = (a, b) => a + b
const subtract = (a, b) => a - b

const checkSumFn = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Arguments must be numbers, received string')
  } else {
    const result = sum(a, b)
    if (result !== a + b) {
      throw new Error('Sum function failed to return expected value')
    }
    return true
  }
}

console.log('Must sum 2 numbers: ', checkSumFn(10, 20))
// console.log('Must return error for using strings: ', checkSumFn(10, '10'))
