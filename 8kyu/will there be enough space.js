// Will there be enough space? - 8kyu (July 7th)

function enough(cap, on, wait) {
    return cap - on >= wait ? 0 : wait - (cap - on)
  }

enough(10, 5, 5) // 0
enough(100, 60, 50) // 10
enough(20, 5, 5) // 0