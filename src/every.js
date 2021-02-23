/**
 * [every description]
 * @param  {[type]}   arr      [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
export function every(arr,callback){
  //遍历数组
  for (var i = 0; i < arr.length; i++) {
    // 执行回调 如果返回结果是假 为false
    if(!callback(arr[i],i)){
      return false;
    }
  }
// 如果都满足
  return true;
}
