function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var result = []
  var dpm = ''
  for (var i = 1; i <= angka; i++) {
      for (var j = 1; j <= angka; j++) {
          if(i * j === angka) {
            
           dpm += i + 'x' + j
           result.push(dpm.length-1)
           dpm = ''
          }
      }
  }
  var min = result[0]
  for (var i = 0; i < result.length; i++) {
      if (result[i] < min) {
          min = result[i]
      }
  }
  return min
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2