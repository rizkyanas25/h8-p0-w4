function highestScore (students) {
  // Code disini
  var result = {}
  var max = students[0].score
  for (var i = 0; i < students.length; i++) {
    if (result[students[i].class] === undefined) {
      result[students[i].class] = {
        name : students[i].name,
        score : students[i].score,
      }
    }
    if (students[i].score < max) {
      result[students[i].class].name = students[i].name
      result[students[i].class].score = students[i].score
    }
  }
  return result
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 80,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 50,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 110,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }
