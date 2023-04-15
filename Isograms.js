
// PREP

//P - str, if empty => isogram, ignore letter case
//R - boolean, true if isogram (unique letters don't repeat), false if not isogram (if letters repeat)
//P - 


function isIsogram(str){
    /*
    convert str into a Set (which filters out repeating letters)
    compare it to str
    conditional if not the same as str, then isogram
    but if same, then isogram
    */

    const uniqueChars = new Set(str.toLowerCase())
    let checkDup = Array.from(uniqueChars).join('')
    console.log(checkDup)

    return str.toLowerCase() === checkDup ? true : false

  }


  //E
  isIsogram("Dermatoglyphics") // true
  isIsogram("isogram") // true
  isIsogram("aba") // false
  isIsogram("moOse") // false
  isIsogram("isIsogram") // false
  isIsogram("") // true

  //Refactored//
  function isIsogram(str) {
    const uniqueChars = new Set(str.toLowerCase());
    return str.length === uniqueChars.size;
  }
