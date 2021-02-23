/**
 * apply 函数实现
 * @param  {[type]} Fn   [原函数]
 * @param  {[type]} obj  [目标函数]
 * @param  {[type]} args [类型是数组Array]
 * @return {[type]}      [Obj,Obj,Array]
 */
export function apply(Fn,obj,args){
  // 判断
  if(obj == undefined || obj ==null){
    obj = globalThis; //全局对象
    //js中是window , node中是global
  }
  // 为obj 添加临时方法
  obj.temp = Fn;
  // 执行方法
  let result = obj.temp(...args);
  // 删除临时属性
  delete obj.temp;
  // 返回结果
  return result;
}
