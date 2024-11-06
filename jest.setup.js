import '@testing-library/jest-dom'

// Suppress specific console warnings in tests
const originalError = console.error
console.error = (...args) => {
  if (args[0].includes('Warning: validateDOMNesting')) {
    return
  }
  originalError.call(console, ...args)
}