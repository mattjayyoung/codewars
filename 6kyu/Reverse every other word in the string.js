// Reverse every other word in the string - 6kyu (December 31st)

function reverse(str){
  console.log(str)

  if (str.length < 1) return str.trim()
  let arr = str.split(' ').map((el,i) => {

    if (i % 2 !== 0){
      return el.split('').reverse().join('')
    } else {
      return el
    }
    
})
  
  if (arr.join(' ') === "   "){
    return ""
  } else {
    return arr.join(' ')
  }
}

reverse("Reverse this string, please!") // "Reverse siht string, !esaelp
reverse("I really don't like reversing strings!") // "I yllaer don't ekil reversing !sgnirts"