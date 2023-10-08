// Return the day - 8kyu (October 8th)

function whatday(num) { 
const days = [null, 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

if (days[num]){
  return days[num]
} else {
  return 'Wrong, please enter a number between 1 and 7'
}
}