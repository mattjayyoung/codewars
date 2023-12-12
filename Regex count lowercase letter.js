// Regex count lowercase letters - 8kyu (December 12th)

function lowercaseCount(str){
    const regex = str.match(/[a-z]/g)
    return regex ? regex.length : 0 
}

lowercaseCount("abc") //  3
lowercaseCount("abcABC123") // 3
lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~") // 3
lowercaseCount("") /// 0
lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~") // 0
lowercaseCount("abcdefghijklmnopqrstuvwxyz") // 26