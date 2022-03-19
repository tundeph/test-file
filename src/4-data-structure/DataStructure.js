import React from "react"

const DataStructure = () => {
  //-------------------------
  //-----chunk algorithm
  const chunk = (arr, size) => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
      if (
        !newArr[newArr.length - 1] ||
        newArr[newArr.length - 1].length === size
      ) {
        newArr.push([arr[i]])
      } else {
        newArr[newArr.length - 1].push(arr[i])
      }
    }

    return newArr
  }

  // const arr = [3, 5, 1, 2, 9, 3, 2, 6, 7]
  // const siz = 2
  // console.log(chunk(arr, siz))

  //--------------------------------
  //----to sort by the number of occurrenc of an element in an array
  //['Foo', 'Bar', 'Foo', 'Bar', 'Bar', 'Faz', 'Fee']

  // const sorter =(arrays)=>{

  // 	const res = {}

  // 	arrays.forEach((array)=>{
  //   	if(!res[array]){
  //     	res[array] = 1
  //     }else{
  //     res[array] += 1
  //     }
  //   })

  // const finalArray = Object.keys(res)
  // finalArray.sort((a,b)=>{
  // 	res[a] === res[b] ? 0 : res[a] > res[b] ? -1 : 1
  // })
  // return finalArray
  // }

  return <div></div>
}
export default DataStructure
