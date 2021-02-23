/**
 * 浅拷贝
 * @param       {[type]} target [description]
 * @constructor
 */
export function ShallowCopy(target) {
  // 如果是对象(不是函数, 也就是可能是object对象或者数组)
  if (target!=null && typeof target==='object') {
    if (target instanceof Array) {
      // return target.slice()
      // return target.filter(() => true)
      // return target.map(item => item)
      return [...target]
    } else {
      // return Object.assign({}, target)
      return {...target}
    }
  }
  // 基本类型或者函数, 直接返回
  return target
}
