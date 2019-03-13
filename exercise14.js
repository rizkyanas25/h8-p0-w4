function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var result = []
  for (var i = 0; i < arrPenumpang.length; i++) {
      // assign obj
      var obj = {
          penumpang : arrPenumpang[i][0],
          naikDari : arrPenumpang[i][1],
          tujuan : arrPenumpang[i][2],
          bayar : 0,
      }
      // cari index start dan stop
      for (var j = 0; j < rute.length; j++) {
          if (rute[j] === obj.naikDari) {
              var start = j
          }
          if (rute[j] === obj.tujuan) {
              var stop = j
          }
        }
      // calculate ongkos
      obj.bayar = Math.abs((stop - start) * 2000) 
      
      result.push(obj)
  }
  return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'F', 'B'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]