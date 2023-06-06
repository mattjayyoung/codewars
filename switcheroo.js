// Switcheroo - 7kyu (June 6th)

function switcheroo(x){
    return x.replaceAll('a', 1).replaceAll('b', 'a').replaceAll(1, 'b')
}


switcheroo('aaabcccbaaa') // 'bbbacccabbb'
switcheroo('ccccc') // 'ccccc'


switcheroo('abc') // 'bac'