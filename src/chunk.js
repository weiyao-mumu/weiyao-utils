/**
 * 数组分块
 * @param  {[type]} array [description]
 * @param  {[type]} size  [description]
 * @return {[type]}       [description]
 */
export function chunk (array, size) {
 if (array.length===0) {
   return []
 }
 size = size || 1

 const bigArr = []
 let smallArr = []

 array.forEach(item => {
   if (smallArr.length===0) {
     bigArr.push(smallArr)
   }
   smallArr.push(item)
   if (smallArr.length===size) {
     smallArr = []
   }
 })

 return bigArr
}
 //
 // console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3)) // [[1,2,3], [4,5,6],[7]]
