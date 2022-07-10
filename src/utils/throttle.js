let flag = true
function throttle(fn, delay = 500) {
  if (flag) {
    setTimeout(() => {
      fn()
      flag = true
    }, delay)
    flag = false
  }
}
export { throttle }
