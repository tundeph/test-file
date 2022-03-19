import React from "react"

const DataStructure = () => {
  //------------------------
  //capitalize each word in a sentence

  const capitalizeEach = (str) => {
    const stringArray = str.split(" ").reduce((acc, item) => {
      acc.push(item.slice(0, 1).toUpperCase() + item.slice(1, item.length))
      return acc
    }, [])
    return stringArray.join(" ")
  }
  console.log(capitalizeEach("I like cats"))
  //------------------------
  // fizzbuzz algorithm to console.log fizz, buzz and fizzbuzz for items divisible by 3,5 and 5&5 respectively

  // const fizzBuzz = (n) => {
  //   const arr = []
  //   for (let i = 1; i <= n; i++) {
  //     arr.push(
  //       i % 3 === 0 && i % 5 === 0
  //         ? "fizzbuzz"
  //         : i % 5 === 0
  //         ? "buzz"
  //         : i % 3 === 0
  //         ? "fizz"
  //         : i
  //     )
  //   }
  //   return arr
  // }
  // console.log(fizzBuzz(25))

  //------------------------
  //maxChar Algorithm. Find the character with the highest occurence in a string

  // const maxChar = (str) => {
  //   const obj = {}
  //   let maxChar = ""
  //   let maxCount = 0

  //   for (let i = 0; i < str.length; i++) {
  //     obj[str[i]] ? (obj[str[i]] += 1) : (obj[str[i]] = 1)
  //     if (obj[str[i]] > maxCount) {
  //       maxChar = str[i]
  //       maxCount = obj[str[i]]
  //     }
  //   }
  //   return maxChar
  // }

  // console.log(maxChar("eennnrffffffdg"))

  //------------------------
  //reverse an integer
  // const reverseInteger = (numb) => {
  //   const reversed = Math.abs(numb).toString().split("").reverse().join("")
  //   return numb < 0 ? reversed * -1 : reversed
  // }
  // console.log(reverseInteger(-256789))

  //------------------------
  // reverse a string and compare whether it is the same as the original
  //   const palindrome = (str) => {
  //     return str.toLowerCase() === str.toLowerCase().split("").reverse().join("")
  //   }

  //   console.log(palindrome("Madam"))

  //------------------------
  //string reversal algorithm
  //
  // const stringReversal = (str) => {
  //   return str.split("").reverse().join("")
  // }
  // console.log(stringReversal("Tunde"))

  //-------------------------
  // chunk algorithm
  //
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
  //to sort by the number of occurrence of an element in an array
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
