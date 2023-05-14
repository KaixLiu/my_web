export default function throttle (fn, time) {
  let flag = true
  return (...args) => {
    if (flag) {
      fn(...args)
      flag = false
      setTimeout(() => {
        flag = true
      }, time)
    }
  }
}
// const throttle = (fn, time) => {
//   return function () {
//     if (fn.t) return
//     fn.t = setTimeout(() => {
//       fn.call(this)
//       fn.t = null
//     }, time)
//   }
// }
// const throttle = function (fn, delay = 200) {
//   let canRun = true // 通过闭包保存一个标记
//   return function () {
//     if (!canRun) return// 在delay时间内，直接返回，不执行fn
//     canRun = false
//     setTimeout(() => {
//       fn.apply(this, arguments)
//       canRun = true// 直到执行完fn,也就是delay时间后，打开开关，可以执行下一个fn
//     }, delay)
//   }
// }
