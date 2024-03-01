// Freudian translator - 8kyu (March 1st)

function toFreud(string) {
  if (!string) return ""
let freqSex = string.split(' ').length

return "sex ".repeat(freqSex).trim()
}