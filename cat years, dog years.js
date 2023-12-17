// Cat years, Dog years - 8kyu (December 16th)

function humanYearsCatYearsDogYears (humanYears) {
  if (humanYears === 1){
    return [humanYears, 15, 15]
  } else if (humanYears === 2){
    return [humanYears, 24, 24]
  } else if (humanYears > 2){
    return [humanYears, 24 + (4 * (humanYears - 2)), 24 + (5 * (humanYears - 2))]
  }
}

humanYearsCatYearsDogYears(1) // [1,15,15]
humanYearsCatYearsDogYears(2) // [2,24,24]
humanYearsCatYearsDogYears(10) // [10,56,64]