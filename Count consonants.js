// Count consonants - 7kyu (June 28th)

function consonantCount(str) {
    const vowels = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U']
    let count = 0

    for (let i = 0; i < str.length; i++){
        if (!vowels.includes(str[i]) && str.charCodeAt(i) <= 90 && str.charCodeAt(i) >= 65 || !vowels.includes(str[i]) && str.charCodeAt(i) <= 122 && str.charCodeAt(i) >= 97){
            count++
        }
    }
    return count


  }

consonantCount('aeiouAEIOU') // 0
consonantCount('aaa') // 0
consonantCount('') // 0

consonantCount('bcdfghjklmnpqrstvwxyz') // 21
consonantCount('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ') // 42

consonantCount('Y') // 1

consonantCount('01234567890_') // 0

consonantCount(' ^&$#') // 0

consonantCount('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#') // 42


65-90
97-122