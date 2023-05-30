//Ease the StockBroker - 6kyu (May 30th) 

//Not the solution - forces you to use Regex when not necessary. I tested my own solution against the most popular answer and it produces the same result. 

function balanceStatements(list){
  console.log(list)
  
  let orders = list.split(',').map(el => el.trim().split(' '))


  let buyArr = []
  let sellArr = []
  let badlyFormedNum = 0
  let badlyFormedStr = ""

  

  for (let i = 0; i < orders.length; i++){
    if (orders[i][2].includes('.') && orders[i][3] == 'B'){
      console.log(orders[i][2])

      buyArr.push(Number(orders[i][1]) * Number(orders[i][2]))

    } else if (orders[i][3] === 'S') {
      sellArr.push(Number(orders[i][1]) * Number(orders[i][2]))

    } else {
      badlyFormedNum += 1
      badlyFormedStr += `${orders[i].join(' ')} ;`
    }

  }
 
  
  let sellQuote = 0
  let buyQuote = 0

  console.log(buyArr.map(el => typeof el))


  if (sellArr.length <= 0){
    buyQuote = Math.round(buyArr.reduce((acc,curr) => acc + curr,0))
    return `Buy: ${buyQuote} Sell: ${sellQuote}`
  } else if(buyArr.length <= 0) {
    sellQuote = Math.round(sellArr.reduce((acc,curr) => acc + curr, 0))
    return `Buy: ${buyQuote} Sell: ${sellQuote}`
  } else if(badlyFormedNum === 0) {
    sellQuote = Math.round(sellArr.reduce((acc,curr) => acc + curr, 0))
    buyQuote = Math.round(buyArr.reduce((acc,curr) => acc + curr, 0))
    return `Buy: ${buyQuote} Sell: ${sellQuote}`
      } else {
        sellQuote = Math.round(sellArr.reduce((acc,curr) => acc + curr, 0))
        buyQuote = Math.round(buyArr.reduce((acc,curr) => acc + curr, 0))
    return `Buy: ${buyQuote} Sell: ${sellQuote}; Badly formed ${badlyFormedNum}: ${badlyFormedStr}`
  }
}

function balanceStatements2(list){
  var bought = 0, sold = 0, bad = [];
  list = list.trim();
  list = list !== '' ? list.split(',') : [];
  for (var i in list) {
    if (!/^\s*[^\s]+ \d+ \d*\.\d+ (B|S)\s*$/.test(list[i])) 
      bad.push(list[i].trim());
    else { 
      var order = list[i].trim().split(' ');
      if (order[3] === 'B') bought += order[1]*order[2];
      if (order[3] === 'S') sold += order[1]*order[2];
    }
  }
  return 'Buy: ' + Math.round(bought) +
         ' Sell: ' + Math.round(sold) +
         (bad.length === 0 ? '' :
         '; Badly formed ' + bad.length + ': ' + bad.join(' ;') + ' ;');
}

let str = "ZNGA 1300 2.66 B, CLH15.NYM 50 56.32 B, OWW 1000 11.623 B, OGG 20 580.1 B"


balanceStatements(str) === balanceStatements2(str) ? true : false

balanceStatements("GOOG 300 542.0 B, AAPL 50 145.0 B, CSCO 250.0 29 B, GOOG 200 580.0 S")

//'Buy: 177100 Sell: 116000' INCORRECT
//'Buy: 169850 Sell: 116000; Badly formed 1: CSCO 250.0 29 B' CORRECT

let num = 5.6
function checkDecimal(num){
  return num.includes(".") ? true : false
}

balanceStatements("GOOG 300 542.93 B, CLH15.NYM 50 56.32 S, CSCO 250 29.46 B, OGG 20 580.1 B")
// 'Buy: 181846 Sell: 2816'
// 

"ZNGA 1300 2.66 B, CLH15.NYM 50 56.32 B, OWW 1000 11.623 B, OGG 20 580.1 B"

checkDecimal(num)



balanceStatements("ZNGA 1300 2.66 B, CLH15.NYM 50 56.32 B, OWW 1000 11.623 B, OGG 20 580.1 B")
// "Buy: 29499 Sell: 0")

balanceStatements("GOOG 90 160.45 B, JPMC 67 12.8 S, MYSPACE 24.0 210 B, CITI 50 450 B, CSCO 100 55.5 S") 
//"Buy: 14440 Sell: 6408; Badly formed 2: MYSPACE 24.0 210 B ;CITI 50 450 B ;"


balanceStatements("GOOG 300 542.93 B, CLH15.NYM 50 56.32 S, CSCO 250 29.46 B, OGG 20 580.1 B")
//'Buy: 181846 Sell: 2816'

balanceStatements("ZNGA 1300 2.66 B, GOOG 200 580.12 S, OWW 1000 11.623 B, BAC 200 16.67 B")
//'Buy: 18415 Sell: 116024'

balanceStatements("ZNGA 1300 2.66 S, CLH15.NYM 50 56.32 S, OWW 1000 11.623 S, OGG 20 580.1 S")
//'Buy: 0 Sell: 29499'

balanceStatements("ZNGA 1300 2.66 S, CLH15.NYM 50 56.32 S, OWW 1000 11.623 S, OGG 20 580.1 S")


