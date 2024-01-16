// Simple string characters - 7kyu (January 16th)

function solve(s){

 let upperCount = s.match(/[A-Z]/g)? s.match(/[A-Z]/g).length : 0
 let lowerCount = s.match(/[a-z]/g) ? s.match(/[a-z]/g).length : 0
 let digitCount = s.match(/[0-9]/g) ? s.match(/[0-9]/g).length : 0
 let specialCount = s.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) ? s.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|`~,.<>\/?]/g).length : 0

return [upperCount, lowerCount, digitCount, specialCount]

}

solve("") // [0,0,0,0]);
solve("aAbBcC") // [3,3,0,0]);

solve("Codewars@codewars123.com") // [1,18,3,2]);

solve("bgA5<1d-tOwUZTS8yQ") // [7,6,3,2]);

solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H") // [9,9,6,9]);

solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD") // [15,8,6,9]);

solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe") //  [10,7,3,6])

solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft") //  [7,13,4,10])

solve("927=$131.!~!5#73]1^&&|$6{-|") // [0, 0, 11,15]
solve("/ekeH@!q}<Hj=PNxBZMq/-(q`Mg)ORootSeja_*B_o{u") // [ 12, 17, 0, 15 ]

solve("532+79/960-<2^|0@_\*~{,6>!2783#}2=\")