// Well of Ideas - Easy Version - 8kyu (January 21st) 

function well(x){
    let goodCount = 0
    let badCount = 0

    for (let i = 0; i < x.length; i++){
        if (x[i] === 'good'){
            goodCount++
        }
    }

    if (goodCount > 2) {
        return 'I smell a series!'
    } else if (goodCount === 1 || goodCount === 2){
        return 'Publish!'
    } else {
        return 'Fail!'
    }
}

well(['bad', 'bad', 'bad']) // 'Fail!'
well(['good', 'bad', 'bad', 'bad', 'bad']) // 'Publish!'
well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']) // 'I smell a series!'

