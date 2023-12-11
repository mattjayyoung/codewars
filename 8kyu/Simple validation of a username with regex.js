// Simple validation of a username with regex (8kyu) - December 11th

function validateUsr(username) {
  
  const regex = /^[a-z0-9_]{4,16}$/
  
  return regex.test(username)
}

validateUsr('asddsa') // true);
validateUsr('a') // false);
validateUsr('Hass') // false);
validateUsr('Hasd_12assssssasasasasasaasasasasas') // false);
validateUsr('') // false);
validateUsr('____') // true);
validateUsr('012') // false);
validateUsr('p1pp1') // true);
validateUsr('asd43 34') // false);
validateUsr('asd43_34') // true);