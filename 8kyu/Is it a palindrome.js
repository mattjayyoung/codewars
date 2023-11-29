// Is it a palindrome? - 8kyu (November 29th)

function isPalindrome(x) {
  return Array.from(x).toString() === Array.from(x).reverse().toString()
}


isPalindrome("a") // true
isPalindrome("aba") // true
isPalindrome("Abba") // true
isPalindrome("hello") // false
isPalindrome("Bob") // true
isPalindrome("Madam") // true
isPalindrome("AbBa") // true)isPalindrome("") // true