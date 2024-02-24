// Training JS #18: Methods of String object - 8kyu (February 24th)

function splitAndMerge(string, separator) {
  return string.split(" ").map(word => word.split('').join(separator)).join(" ")
}


splitAndMerge("Hello World!", ".")     //  "H.e.l.l.o W.o.r.l.d.!"

splitAndMerge("My name is John", " ")  //  "M y n a m e i s J o h n"
splitAndMerge("My name is John", "-")  //  "M-y n-a-m-e i-s J-o-h-n"

splitAndMerge("Hello World!", ",")     //  "H,e,l,l,o W,o,r,l,d,!"