// Hex to Decimal - 8kyu (January 14th)

function hexToDec(hexString){
  return parseInt(hexString.toString(), 16)
}
   
hexToDec("1") // 1);
hexToDec("a") // 10);
hexToDec("10") // 16);
hexToDec("FF") // 255);
hexToDec("-C") // -12);