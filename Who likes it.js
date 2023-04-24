// Who likes it? - 6kyu (Apr 24)
/*
//P - array of names
//R - who likes this

if array is blank => "no one likes this"
if array.length === 1 => "______ likes this"
if array.length === 2 => " _____ and _____ like this"
if array.length === 3 => "_______, ________ and _______ like this"
if array.length >= 4  => "_______, ________ and # others like this"


*/

function likes(names) {
  if (names.length < 1){
    return 'no one likes this'
  } else if (names.length === 1){
    return `${names[0]} likes this`
  } else if (names.length === 2){
    return `${names[0]} and ${names[1]} like this`
  } else if (names.length === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else if (names.length > 3){
    let count = names.length - 2
    return `${names[0]}, ${names[1]} and ${count} others like this`
  }
}

//Refactored

function likes(names){
  switch (names.length){
    case 0:
      return 'no one likes this'
    case 1:
      return `${names[0]} likes this`
    case 2:
      return `${names[0]} and ${names[1]} like this`
    case 3: 
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    default:
      let count = names.length - 2
      return `${names[0]}, ${names[1]} and ${count} others like this`
  }
}


//E

likes([]) // 'no one likes this'
likes(['Peter']) // 'Peter likes this'
likes(['Jacob', 'Alex']) // 'Jacob and Alex like this';
likes(['Max', 'John', 'Mark']) // 'Max, John and Mark like this'
likes(['Alex', 'Jacob', 'Mark', 'Max']) // 'Alex, Jacob and 2 others like this'

//P
/*

if array is blank => "no one likes this"
if array.length === 1 => "______ likes this"
if array.length === 2 => " _____ and _____ like this"
if array.length === 3 => "_______, ________ and _______ like this"
if array.length >= 4  => "_______, ________ and # others like this"
*/
