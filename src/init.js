import {initState} from "./state"
export function initMinxi(Vue) {
  Vue.prototype._init = function (options) {
    const vm = this
    // vue $nextTick  $data  $attr
    vm.$options = options

    // 初始化状态
    initState(vm)
  }
}


