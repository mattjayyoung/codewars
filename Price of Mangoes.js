// Price of Mangoes - 8kyu (October 10th)

function mango(quantity, price){

    let totalPrice = 0


    for (let i = 0; i <= quantity; i++){
        totalPrice += price
        if (i % 3 === 0){
            totalPrice -= price
        }
    }
    return totalPrice
}

3 + 3
3 + 3 + 3
3 + 3 + 3 + 3

5 + 5 + 5 + 5 + 5 + 5 + 5 + 5 + 5

mango(2, 3) // 6    # 2 mangoes for $3 per unit = $6; no mango for free
mango(3, 3) // 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
mango(5, 3) // 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
mango(9, 5) // 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

