export function initState(vm) {
  const opts = vm.$options
  if (opts.data) {
    initData(vm)
  }
}
function initData(vm) {
  let data = vm.$options.data
  // data 可能是fn 或obj 
  data = typeof data === 'function' ? data.call(vm) : data

  //对数据进行劫持 defineProperty
  observe(data)
}