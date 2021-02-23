/**
 * 后几位不要
 * @param  {[type]} arr  [description]
 * @param  {[type]} size [description]
 * @return {[type]}      [description]
 */
export function dropRight(arr,size){
  return arr.filter((value,index)=>{
    return index <arr.length -size;
  })
}

// console.log(dropRight([1,2,3,4,5],2));
