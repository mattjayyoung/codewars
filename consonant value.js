  function solve(str){
    let arr = str.split('a').toString().split('e').toString().split('i').toString().split('o').toString().split('u')
    let highestNum = 0

   
    let substrings = arr.map(el => el.split(','))
    
    let flatten = [].concat(...substrings)
    

    for (let i = 0; i < flatten.length; i++){
      if (!flatten[i]){
        flatten.splice(i,1)
      }
    }

    for (let i = 0; i < flatten.length; i++){
      
      let total = flatten[i].split('').map((el,i) => el.charCodeAt(0) - 96).reduce((sum, el) => sum + el, 0)
      

      if (total > highestNum){
        highestNum = total
      }
      
    }
    return highestNum
  }




solve("chruschtschov") // 80

solve("khrushchev") // 38
solve("strength") // 57
solve("catchphrase") // 73
solve("twelfthstreet") // 103
solve("mischtschenkoana") //80

solve("zodiac") // 26







let removedVowels = s.split('').filter(char => !vowels.includes(char))

let code = removedVowels.map((char) => char.charCodeAt(0) - 96)

console.log(code)
return Math.max(...code)

function test(str){
  return str.split('').map((el,i) => el.charCodeAt(0))
}
test("zodiac") // 26