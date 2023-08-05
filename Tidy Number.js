function tidyNumber(n){

    let arr = n.toString().split('').map(digit => Number(digit))

    let [i, j] = [0,1]

    while (j < arr.length){
        if (arr[i] > arr[j]){
            return false
        } else {
            i++
            j++
        }
    }
    return true


}


tidyNumber(12)// true
tidyNumber(102)// false
tidyNumber(9672)// false
tidyNumber(2789)// true
tidyNumber(2335)// true