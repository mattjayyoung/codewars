// The Office IV - Find a Meeting Room - 7kyu (March 14th)

function meeting(x){
    return x.indexOf('O') >= 0 ? x.indexOf('O') : 'None available!'
}

meeting(['X', 'O', 'X']) // 1);
meeting(['O','X','X','X','X']) // 0);
meeting(['X','X','X','X','X']) // 'None available!');