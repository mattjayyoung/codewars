// Make acronym - 7kyu (July 9th)

function toAcronym(inp){
  return inp.split(' ').map(el => el[0].toUpperCase()).join('')
}


toAcronym("Code Wars") // "CW",
toAcronym("Water Closet") // "WC"
toAcronym("Portable Network Graphics") // "PNG"
toAcronym("PHP: Hypertext Preprocessor") // "PHP"
toAcronym("hyper text markup language") // "HTML"