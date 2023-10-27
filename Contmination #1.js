// Contamination #1 - String - 8kyu - (October 27th)

function contamination(text, char){

  if (!text) return ""
  let arr = Array.from(text)

  for (let i = 0; i < arr.length; i++){
    arr.splice(i,1,char)
  }

  return arr.join('')
}

contamination("abc","z") // "zzz"
Test.assertEquals(contamination("","z"), "")
Test.assertEquals(contamination("abc",""), "")
Test.assertEquals(contamination("_3ebzgh4","&"), "&&&&&&&&")
Test.assertEquals(contamination("//case"," "), "      ")