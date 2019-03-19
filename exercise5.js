function ubahHuruf(kata) {
  // you can only write your code here!
  var result = ''
  var check = 'abcdefghijklmnopqrstuvwxyz'
  for (var i = 0; i < kata.length; i++) {
    for (var j = 0; j < check.length; j++) {
        if (kata[i] === check[j] && kata[i] !== check[check.length-1]) {
            result += check[j+1]
        }
        if (kata[i] === check[check.length-1]) {
            result += 'a'
            break
        }
      }
  }
  return result
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
console.log(ubahHuruf('woz'))