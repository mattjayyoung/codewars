// Sum of the first nth term of Series - 7kyu (May 7th)

function SeriesSum(n){
   
        let numerator = "1/"
        let denominator = 1
        let series = []
        
        if (n <= 0){
        return "0.00"
        } else {
        for (let i = 0; i < n - 1; i++){
          denominator += 3
          let fraction = numerator + denominator

          series.push(eval(fraction))
          
        }

        let rawNumber = series.reduce((acc,curr) => acc + curr, 1)
        let numberTo2DecimalPlaces = rawNumber.toFixed(2)
      return numberTo2DecimalPlaces

        }
    }

    SeriesSum(4) // "1.49"

SeriesSum(1) // "1.00"
SeriesSum(2) // "1.25"
SeriesSum(3) // "1.39"
