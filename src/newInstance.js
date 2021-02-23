/**
 * 创建Fn构造函数的实例对象
 * @param  {[type]} Fn   [description]
 * @param  {[type]} args [description]
 * @return {[type]}      [description]
 */
export function newInstance(Fn,...args){
  // 创建一个空的object实例对象obj, 作为Fn的实例对象
  const obj = {}
  // 将Fn的prototype属性值赋值给obj的__proto__属性值
  obj.__proto__ = Fn.prototype
  // 调用Fn, 指定this为obj, 参数为args列表
  const result = Fn.call(obj, ...args)
  // 如果Fn返回的是一个对象类型, 那返回的就不再是obj, 而是Fn返回的对象
  // 否则返回obj
  return result instanceof Object ? result : obj
}
