/**
 * 前几位不要
 * @param  {[type]} arr  [description]
 * @param  {[type]} size [description]
 * @return {[type]}      [description]
 */
export function drop(arr,size){
    return arr.filter((item,index)=> index>=size);
}
