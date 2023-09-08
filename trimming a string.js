// Trimming a string (7kyu) - Sept 8th

function trim(str, size) {

  if (str.length <= size){
    return `${str.split('').slice(0,size).join('')}`
  } else if (size <= 3 ){
    return `${str.split('').slice(0,size).join('')}...`
  } else {
    return `${str.split('').slice(0,size - 3).join('')}...`
  }
  

}

trim("Creating kata is fun", 14) // "Creating ka...");
trim("He", 1) // "H...");
trim("Code Wars is pretty rad", 50) // "Code Wars is pretty rad"

trim("kz", 4) // "kz"