// Remove n exclamation marks in the sentence from left to right (8kyu) - January 1st

function remove(s,n){
  let arr = s.split('')

  let count = 0

  for (let i = 0; i < arr.length; i++){
    let mark = arr.indexOf("!")
    console.log(mark)

    if (mark >= 0 && count < n){
      count++
      arr.splice(mark, 1)
      console.log(arr)
    }
  }
  return arr.join('')
}

remove("Hi!",100) // "Hi")


remove("Hi!!!",100) // "Hi")
remove("!Hi",1) // "Hi")
remove("!Hi!",1) // "Hi!")
remove("!Hi!",100) // "Hi")
remove("!!!Hi !!hi!!! !hi",1) // "!!Hi !!hi!!! !hi")
remove("!!!Hi !!hi!!! !hi",3) // "Hi !!hi!!! !hi")
remove("!!!Hi !!hi!!! !hi",5) // "Hi hi!!! !hi")
remove("!!!Hi !!hi!!! !hi",100) // "Hi hi hi")


remove("Hi!!!",1) // "Hi!!")

remove("Hi!",1) // "Hi")
