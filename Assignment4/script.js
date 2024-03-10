function convertTemperature(temperature, temperatureType) {
  if (temperatureType === 'Fahrenheit') {
    return (temperature - 32) / 1.8;
  } else if (temperatureType === 'Celsius') {
    return (temperature * 1.8) + 32;
  } else {
    return null;
  }
}

const convert1 = convertTemperature(91, 'Fahrenheit');
const convert2 = convertTemperature(32, 'Celsius');
console.log(convert1);
console.log(convert2);

function calculateGrade(assignmentsGrade, midtermGrade, finalProjectGrade, participationGrade) {
  let grades = {
    assignments: assignmentsGrade,
    midterm: midtermGrade,
    finalProject: finalProjectGrade,
    participation: participationGrade
  }
  let weights = {
    assignments: .3,
    midterm: .25,
    finalProject: .3,
    participation: .1
  }
  // https://stackoverflow.com/a/16095393
  const bestGrade = Object.keys(grades)
    .reduce(function(grade1, grade2) {
      return grades[grade1] > grades[grade2] ? grade1 : grade2;
    });
  weights[bestGrade] += .05
  return (assignmentsGrade * weights.assignments) +
    (midtermGrade * weights.midterm) +
    (finalProjectGrade * weights.finalProject) +
    (participationGrade * weights.participation);
}

const grade = calculateGrade(1, .92, .86, 0.95);
console.log(grade);
