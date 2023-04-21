//Consecutive Strings - 6 kyu (Apr 21st)

// PREP

//P - array of strings, and an integer
//R - longest string made up of k consecutive strings, if the length of the returned string is 0, or if k is greater than length of the string, or if k is less than equal to zero, return ""

function longestConsec(strarr, k) {
    /*P

    1. Create a new array
    2. *loop Combine words [if k = 2 => i and i + 1, if k = 3 => i and i + 1 and i +2] and push into new array
    3. Sort the words by length
    4. The last (or first) word in the array is the longest
    */


   //combine words
    
   let arrOfWords = []
if (strarr.length <= 0 || strarr.length < k){
    return ""
} else {
for (let i = 0; i < strarr.length - (k - 1); i++){

    let word = ""

   for (let j = i; j < k + i; j++){
    
    word += strarr[j]
   }
    arrOfWords.push(word)
}

let longestWord = arrOfWords.sort((b,a) => (b.length - a.length))
console.log(longestWord)
return longestWord.find((word, index, array) => word.length === array[array.length - 1].length)
}

}


//E

longestConsec(["matt", "young", "ma", "n", "river", "time"], 2)

longestConsec(["wkudxfaweih", "wsbjngebaldezjei", "douirpjgi", "hmkkssukb", "hiotezndeewcxuf", "sufmvhfihpzctjwla", "rsdmgikd", "sfomoewtmts", "idtxbrcie", "rkdmwcfhvoj", "yzpovjltlpwns", "wpiaqkakgdrvrkrg", "uayqfpkbbwjtzvo", "buadlgo", "imysewoshfy", "insdsit", "fudnxfdvhx", "wqhbgvpa", "edhshczacam", "nuoatqnpjf", "otjyjwblcfioa", "rnzwolgpibcxod", "siqgmsciyd", "jwszlcz", "tbgxhkjse", "mhkzxawgz", "rtkgkmvcadyacy", "udlckkbkt", "pnusdjeuvgwbx", "ndjagtkzzljwn", "cpuhunpjojvpkjbl", "vvlslwy", "vgxhkiiaojruv", "qcbxebzoxmzrm", "svxginwrbzirwgg", "zilcggtsq", "rtxdczxvxls", "pivhfluvfdlps", "icxdeszjh", "bysfkrges", "ydbkgyiqpcmo", "bvqoqspywge", "fboqjzaz", "stqecknlmxh", "vhqucjjozvh", "wwzoqcwiszr", "wwmobglnxzclr", "yfodpupmxzx", "fwdunkqxdy", "oijvursvf", "jusvmley", "myjugiegkrejo", "eungatgbmyo", "dinebqjrrit", "wgbhsqql", "jnaskalu", "rcbsgwscqy", "ziyztoxmxgd", "zxduaxbkdc", "kdepnhjfd", "hnqokymt", "xaqjixs", "pakpoxp", "hqblit", "yjuphpxavoou", "inpjasdih", "huguwvjlbaj", "vhlnylcirwf", "yortpjjhh", "ktjvxvctdhsl", "zbjyglcxqki", "oiecessd", "dteoedrxwoxcfre", "sgbhegwrmdcvwsv", "xehrlkjj", "uhrpofvrizkkk", "lwfykb", "fbcmqdrvtouhi", "mpuobnf", "jfocsqf", "dxqkpqiwxs", "nrhzyslwp", "tcbhilcaji", "paiyijapkw", "gnsnmvvecpgtfus", "cahnpilelp", "vyzczjbn", "tzrioaqijxo", "tclqmafrb", "vxropxienxjjv", "gglxsjicclj", "tmxmovsoe", "orcyxtw", "klckgjr", "xaftwvhfb", "cgpyaqvqhcwfe", "ldgwbfv", "yihwcfb", "skxlfhnsbt", "rqrgxzjkzyoy", "gfxlkbsadfhusj", "rhztlcnv", "kuzupcuqbmg", "xagykfsxaicwh", "ljxdkflnwwonre", "zoydvfqxoge", "cbiuqtgnsnfx", "jbsqizhm", "cpszprodjinh", "ynhxpwwtksr", "cwhpkqobtxebyw", "pxnraokyzyms", "bbbelsuiypzqkyp", "gcsvktgmxp", "gpaaqdntb", "bsxkahpadna", "eodvzumhyw", "lhaqjguxstx", "zmqdxwcipehhckwi", "tfrelk", "cdmolcepbdh", "brxcmdrtxgt", "cyfwiqfh", "spwmuyknszphv", "lbhezmhybfr", "ecmzqkclk", "kwrfgvykxj", "tkkkejjrqaljo", "tmqvftm", "chrkeja", "ctohkpuwy", "oswcpcwwgvhlb", "vvluccf", "frhdjhflxjsk", "twcsfnyq", "tbvdftazfa", "beupycuclclnt", "qscvvhwo", "wjuvrkuepi", "bymhkree", "rxldpdkff", "lxvinlkggpzwcio", "hpqfzvgauk", "mmsroeglwb", "fuolnag", "drrohzuyc", "teftawqputm", "npjpysglcl", "gkfluorl", "clqjcwgk", "aoitodidaapcb", "rlhajlmbwib", "gytpopyqqzyg", "dxwuwxrxs", "gdxscohd", "hjpzorfgcg", "hnbrktzvogwyym", "djgvjzsltuxg", "ewbkyngfjknpxi", "sqvqjckq", "vtxhahqcq", "udvkvvrmfrhp", "tyrobump", "uglutbpourmuxnfc", "vdhvrqmwvtmm", "wactdzxrdopulpc", "xkdenf", "wdhkjytppnah", "dyeljiugfkxh", "lcnwmdlr", "ubbjgtvv", "bzaoxdgcaahu", "hbediizkyh", "gzcdunzmnssxfi", "xijksfdxw", "qheypnvyd", "cnjinvonfbaj", "yjkbfwkmwzrpo", "iweirvuio", "npdshdpki", "kslvpftnchuwq", "muhyfnld", "qbkgid", "ggscfqotrjnppr", "tycsantyhvr", "egigtepox", "hkywvsmselyup", "thfcakhos", "uhjiglhfz", "clpcnrapx", "idvbxet", "pmrdovhveifihov", "isjoztrivykhy", "jhdbbgde", "izndcjid", "vmvobysvx", "brypzmhhrhk", "wwyiwi", "jjnyrfng"], 6)

//Test answer
console.log("wkudxfaweihwsbjngebaldezjeidouirpjgihmkkssukbhiotezndeewcxufsufmvhfihpzctjwla".length)

//My answer
console.log("ndjagtkzzljwncpuhunpjojvpkjblvvlslwyvgxhkiiaojruvqcbxebzoxmzrmsvxginwrbzirwgg".length)

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) // abigailtheta

longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) // oocccffuucccjjjkkkjyyyeehh


longestConsec([], 3) // ""

longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)//wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck

longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) //wlwsasphmxxowiaxujylentrklctozmymu

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)// ""

longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) //"ixoyx3452zzzzzzzzzzzz"

longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) // ""

longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) // ""