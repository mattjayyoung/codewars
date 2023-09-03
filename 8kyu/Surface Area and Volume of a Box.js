// Surface Area and Volume of a Box - 8kyu (Sept 3rd)

function getSize(width, length, height){
  
  let surfaceArea = (2 * width * length) + (2 * height * length) + (2 * height * width)
  let volume = width * length * height
  
  return [surfaceArea, volume]

  }
