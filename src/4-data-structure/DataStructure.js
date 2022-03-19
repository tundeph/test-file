import React from "react"

const DataStructure = () => {
  //------------------------
  //string reversal algorithm

  const stringReversal = (str) => {
    return str.split("").reverse().join("")
  }

  console.log(stringReversal("Tunde"))

  //-------------------------
  //-----chunk algorithm
  // const chunk = (arr, size) => {
  //   const newArr = []
  //   for (let i = 0; i < arr.length; i++) {
  //     if (
  //       !newArr[newArr.length - 1] ||
  //       newArr[newArr.length - 1].length === size
  //     ) {
  //       newArr.push([arr[i]])
  //     } else {
  //       newArr[newArr.length - 1].push(arr[i])
  //     }
  //   }

  //   return newArr
  // }

  // const arr = [3, 5, 1, 2, 9, 3, 2, 6, 7]
  // const siz = 2
  // console.log(chunk(arr, siz))

  //--------------------------------
  //----to sort by the number of occurrence of an element in an array
  //['Foo', 'Bar', 'Foo', 'Bar', 'Bar', 'Faz', 'Fee']

  // const array = ["Foo", "Bar", "Foo", "Bar", "Bar", "Faz", "Fee"]
  // const sorter = (array) => {
  //   const obj = array.reduce((acc, item) => {
  //     acc[item] ? (acc[item] += 1) : (acc[item] = 1)
  //     return acc
  //   }, {})

  //   return Object.entries(obj).sort((a, b) => {
  //     return a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0
  //   })
  // }

  // console.log(sorter(array))

  return <div></div>
}
export default DataStructure
