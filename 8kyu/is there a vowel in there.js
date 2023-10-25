function isVow(arr){

    const vowels = [97, 101, 105, 111, 117] 

    for (let i = 0; i < arr.length; i++){
        switch(arr[i]){
            case 97:
                arr[i] = 'a'
            break
            case 101:
                arr[i] = 'e'
            break
            case 105:
                arr[i] = 'i'
            break
            case 111:
                arr[i] = 'o'
            break
            case 117:
                arr[i] = 'u'
            break
        }
    }

    return arr

}

isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]) // [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
Test.assertSimilar(isVow([101,121,110,113,113,103,121,121,101,107,103]),["e",121,110,113,113,103,121,121,"e",107,103]);
});


// 97, 101, 105, 111, 117