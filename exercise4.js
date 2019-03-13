function cariModus(arr) {
    // you can only write your code here!
    var result1 = []
    for ( var i = 0; i < arr.length; i++) {
        var same = false
        var temp = []
        for (var j = 0; j < result1.length; j++) {
            if (arr[i] === result1[j][0]) {
                result1[j][1] += 1
                same = true
            }
        }
        if ( same === false) {
            temp.push(arr[i], 1)
            result1.push(temp)
        }
    }
    var max = result1[0][1]
    var modus = result1[0][0]
    if (result1.length === 1){
        // console.log(result1)
        return -1
    }
    for (var i = 0; i < result1.length; i++) {
        if (max < result1[i][1]) {
            max = result1[i][1]
            modus = result1[i][0]
        } 
    }

    if (max === 1) {
        // console.log(result1)
        return -1
    }
    // console.log(result1)
    return modus
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1