// Expressions Matter - 8kyu (May 1st)

Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()

function expressionMatter(a, b, c) {
    let add = a + b + c
    let bracket1 = a * (b + c)
    let bracket2 = (a + b) * c
    let mult1 = a * b + c
    let mult2 = a + b * c
    let allMult = a * b * c

    let array = [add, bracket1, bracket2, mult1, mult2, allMult]
    return Math.max(...array)
    
  }

  expressionMatter(2, 1, 2) // 6
  expressionMatter(2, 1, 1) // 4
  expressionMatter(1, 1, 1) // 3
  expressionMatter(1, 2, 3) // 9
  expressionMatter(1, 3, 1) // 5
  expressionMatter(2, 2, 2) // 8