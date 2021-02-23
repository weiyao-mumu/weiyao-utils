/**
 * 判断obj是否是Type类型的实例
 * 与instanceof 功能相同
 * @param  {[type]} obj  [description]
 * @param  {[type]} Type [description]
 * @return {[type]}      [description]
 */
export function myInstanceOf(obj, Type) {
  // 得到原型对象
  let protoObj = obj.__proto__

  // 只要原型对象存在
  while(protoObj) {
    // 如果原型对象是Type的原型对象, 返回true
    if (protoObj === Type.prototype) {
      return true
    }
    // 指定原型对象的原型对象
    protoObj = protoObj.__proto__
  }

  return false
}
