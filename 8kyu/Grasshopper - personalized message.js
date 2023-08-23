// Grasshopper - Personalized Message (8kyu) - August 22nd

function greet (name, owner) {
  return "Hello " + (name === owner ? 'boss' : 'guest')
}

greet('Daniel', 'Daniel') // 'Hello boss'
greet('Greg', 'Daniel') // 'Hello guest')


