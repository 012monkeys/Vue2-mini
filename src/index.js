import { initMinxi } from "./init";
function Vue(options) {
  this._init(options)
}

initMinxi(Vue) //拓展Vue的方法

export default Vue