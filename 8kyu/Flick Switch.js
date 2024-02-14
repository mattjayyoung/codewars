// Flick Switch (8kyu) - February 14th

function flickSwitch(arr){

  let results = []

  let status = true

  for (let i = 0; i < arr.length; i++){
    if (arr[i] !== 'flick'){
      results.push(status)
    } else {
      
      if (status === true){
        status = false
      } else {
        status = true
      }
      results.push(status)
    }
  }

  return results
}

flickSwitch(["codewars", "flick", "code", "wars"]) // [true, false, false, false]);
flickSwitch(["flick", "chocolate", "adventure", "sunshine"]) // [false, false, false, false]);
flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]) // [true, true, false, false, true]);
flickSwitch(["flick", "flick", "flick", "flick", "flick"]) // [false, true, false, true, false]);
flickSwitch(["john, smith, susan", "flick"]) // [true, false]);
flickSwitch(["bicycle"]) // [true]);
flickSwitch(["flick"]) // [false]);
flickSwitch([]) // []);