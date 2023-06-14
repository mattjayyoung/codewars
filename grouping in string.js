// Grouping in string - 7kyu (June 14th)

function isConsecutive(str){
    for (let i = 0; i < str.length - 1; i++){
        if (str[i] !== str[i + 1]){
            if (str.lastIndexOf(str[i]) >= (i + 1)){
                return false
            }
        }
    }
    return true
}
isConsecutive("1112233") // true
isConsecutive("112233") // true
isConsecutive("11223311") // false
isConsecutive("112200") // true
isConsecutive("1222334556667") // true
isConsecutive("001234400522") // false

/*
look at first element, if it's the same as the one beside it, put it in a duplicate array
if it's not the same as the next element, check to see if that element exists using findLastIndex...if that exists, return false

*/