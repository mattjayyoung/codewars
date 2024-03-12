// Calculate Price Excluding VAT (8kyu) - March 12th

function excludingVatPrice(price){
  
  if (price === 0) return 0
  const result = Number((price / 1.15).toFixed(2)) 
  
  return result > 0 ? result : -1
}

excludingVatPrice(230) // 200.00
excludingVatPrice(123) // 106.96);