//Abbreviate a Two Word Name

function abbrevName(name){

   return name.split(' ').map((el,i,arr) => el[0].toUpperCase()).join('.')

}

abbrevName("Sam Harris")