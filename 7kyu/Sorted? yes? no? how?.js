// Sorted? yes? no? how? - 7kyu (January 17th)

function isSortedAndHow(array) {
    let descending = [...array].sort((a,b) => b - a)
    let ascending = [...array].sort((a,b) => a - b)

    for (let i = 0; i < array.length; i++){
        if (array[i] !== descending[i]){
            if (array[i] !== ascending[i]){
                return 'no'
            } else {
                return 'yes, ascending'
            }
        } else {
            return 'yes, descending'
        }
    }
}




isSortedAndHow([15, 7, 3, -8])
isSortedAndHow([4, 2, 30])

isSortedAndHow([1, 2])