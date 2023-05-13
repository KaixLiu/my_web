const throttle = (func, delay) => {
  let timer = null
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, arguments)
        timer = null
      }, delay)
    }
  }
}

export default throttle
