// No Loops 2- You only need one

function check(a,x){
    return a.includes(x)
  
};


check([66, 101], 66) // true);
check([80, 117, 115, 104, 45, 85, 112, 115], 45) // true);
check(['t', 'e', 's', 't'], 'e') // true);
check(['what', 'a', 'great', 'kata'], 'kat') // false);