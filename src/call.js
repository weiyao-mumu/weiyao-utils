/**
 * call方法的实现
 * @param  {[type]} Fn   [原函数]
 * @param  {[type]} obj  [目标函数]
 * @param  {[type]} args [多个参数]
 * @return {[type]}      [Obj]
 */
export function call(Fn, obj,...args){
  // 判断
  if(obj == undefined || obj ==null){
    obj = globalThis; //全局对象
    //js中是window , node中是global
  }
  // 为obj添加临时的方法
  obj.temp = Fn;
  // 调用temp 方法 ，变相的获取
  let result = obj.temp(...args);
  delete obj.temp;
  return result;
}
