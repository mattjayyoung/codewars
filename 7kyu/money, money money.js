function calculateYears(principal, interest, tax, desired) {
    
    let newPrincipal = principal
    let year = 0

    while (newPrincipal < desired){
        let interestPlus = newPrincipal * interest
        let taxPlus = interestPlus * tax
        newPrincipal += interestPlus - taxPlus
        year += 1
        
    }

    return year
}




calculateYears(1000,0.01625,0.18,1200) // 14


calculateYears(1000, 0.05, 0.18, 1100)

1000+(1000 * 0.05)-((1000*0.05)*0.18)

calculateYears(1000,0.05,0.18,1000)