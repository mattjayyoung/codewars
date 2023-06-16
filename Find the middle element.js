function gimme (triplet) {
    
    for (let i = 0; i < triplet.length; i++){
        if (triplet[i] !== Math.min(...triplet) && triplet[i] !== Math.max(...triplet)){
            return i
        }
    }
}



gimme([2, 3, 1]) // 0
gimme([5, 10, 14]) // 1
gimme([2.1, 3.2, 1.4]) // 0

gimme([5.9, 10.4, 14.2]) // 1

gimme([-2, -3, -1]) // 0

gimme([-5, -10, -14]) // 1

gimme([-2, -3.2, 1]) // 0

gimme([-5.2, -10.6, 14]) // 0