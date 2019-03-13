function cariMedian(arr) {
  // you can only write your code here!
  var median = 0
  var median2 = 0
  var result = 0
 
  if (arr.length % 2 !== 0) {  // if arr ganjil maka median adalah nilai tengah dari arr
      median = (Math.floor(arr.length / 2))
      result = arr[median]
  } else if (arr.length % 2 === 0){  // if arr genap maka median adalah rata rata dari dua nilai tengah
      median = arr[arr.length / 2-1]
      median2 = arr[arr.length / 2]
      result = (median + median2) / 2
  }
  return result
}


// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5