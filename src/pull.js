/**
 * 删除原数组中与value相同的元素, 返回所有删除元素的数组
 * @param  {[type]} array  [description]
 * @param  {[type]} values [description]
 * @return {[type]}        [description]
 */
export function pull (array, ...values) {
 if (array.length===0 || values.length===0) {
   return []
 }
 let result = []
 for (let index = 0; index < array.length; index++) {
   const item = array[index]
    if (values.indexOf(item)!==-1) {
     array.splice(index, 1)
     result.push(item)
     index--
   }
 }
// 返回删除后的结果
 return array;
}
// let arr = [1,3,5,3,7]
// console.log(pull(arr, 2, 7, 3, 7));
