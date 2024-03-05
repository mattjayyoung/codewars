// String Reversing, Changin case, etc. (March 5th) - 7kyu

function reverseAndMirror(s1,s2) {
    console.log(s1)
    console.log(s2)

    let mirror = ""
    for (let i = 0; i < s1.length; i++){
        if (s1[i] === s1[i].toUpperCase()){
          mirror += s1[i].toLowerCase()
        } else if(s1[i] === s1[i].toLowerCase()){
          mirror += s1[i].toUpperCase()
        }
      }

      let combined = mirror.split('').reverse().join('') + mirror


  let reverse = ""
  for (let i = 0; i < s2.length; i++){
    if (s2[i] === s2[i].toUpperCase()){
      reverse += s2[i].toLowerCase()
    } else if(s2[i] === s2[i].toLowerCase()){
      reverse += s2[i].toUpperCase()
    }
  }

  let secondString = reverse.split('').reverse().join('')

  return  secondString + "@@@" + combined 

}

reverseAndMirror('FizZ', 'buZZ') // "zzUB@@@zZIffIZz"