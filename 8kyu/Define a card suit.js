// Define a card suit - 8kyu (January 3rd)

function defineSuit(card) {
    if (card.indexOf('♣') > 0){
      return 'clubs'
    } else if (card.indexOf('♦') > 0){
      return 'diamonds'
    } else if (card.indexOf('♥') > 0){
      return 'hearts'
    } else if (card.indexOf('♠') > 0){
      return 'spades'
    }
  }

  console.log('Q♠'.indexOf('♠'))



defineSuit('Q♠') // 'spades'
 defineSuit('9♦') // 'diamonds'
 defineSuit('J♥') // 'hearts'