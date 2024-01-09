// check same case - 8kyu (January 9th)

function sameCase(a, b){
  if (/[a-z]/g.test(a) && /[a-z]/g.test(b)){
    return 1
  }  else if (/[A-Z]/g.test(a) && /[A-Z]/g.test(b)){
    return 1
  }  else if (/[A-Z]/g.test(a) && /[a-z]/g.test(b)){
    return 0
  } else if (/[a-z]/g.test(a) && /[A-Z]/g.test(b)){
    return 0
  } else {
    return -1
  }
}

sameCase('C', 'B') // 1);
sameCase('b', 'a') // 1);
sameCase('d', 'd') // 1);
sameCase('A', 's') // 0);
sameCase('c', 'B') // 0);
sameCase('b', 'Z') // 0);
sameCase('\t', 'Z',) //-1);
sameCase('H', ':',) //-1);