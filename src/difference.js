/**
 * @差集
 * @param  {[type]} arr1 [description]
 * @param  {[type]} arr2 [description]
 * @return {[type]}      [description]
 */
export function difference(arr1,arr2){
  if (arr1.length===0) {
   return []
 } else if (arr2.length===0) {
   return arr1.slice()
 }
 return arr1.filter(item => arr2.indexOf(item)===-1)
}
