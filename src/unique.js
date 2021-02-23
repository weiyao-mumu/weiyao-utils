/**
 * 数组去重
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
export function unique(arr){
  // 声明一个空数组
  let set = new Set([...arr]);

  return [...set];
}

// let arr = [23,32,4,3,3,32,32,3,3,2,32];
// let result = unique(arr);
// console.log(result);
