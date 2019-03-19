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
    if (students[i].score > max) {
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
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 100,
    class: 'wolves'
  },
  {
    name: 'Robert',
    score: 110,
    class: 'wolves'
  },
  {
    name: 'Bella',
    score: 110,
    class: 'foxes'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }
