// Ensure question (8kyu) - February 8th

function ensureQuestion(s) {
  return s[s.length - 1] === '?' ? s : s + "?"
}