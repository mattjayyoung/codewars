function getDrinkByProfession(param){

  let newParam = param.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ')
 
   switch(newParam){
       case 'Jabroni':
       return 'Patron Tequila'
       break;
       case 'School Counselor':
       return 'Anything with Alcohol'
       break;
       case 'Programmer': 
       return 'Hipster Craft Beer'
       break;
       case 'Bike Gang Member':
       return 'Moonshine'
       break;
       case 'Politician':
       return 'Your tax dollars'
       break;
       case 'Rapper':
       return 'Cristal'
       break;
       default:
       return 'Beer'
   }
 }
 

getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");