// Greet Me - 7kyu (Sept 7th)

function greet(name) {
    return `Hello ${name[0].toUpperCase()}${name.toLowerCase().split('').slice(1).join('')}!`
  };