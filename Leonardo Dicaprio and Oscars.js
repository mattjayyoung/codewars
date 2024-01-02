// Leonardo Dicaprio and Oscars (8kyu) - January 2nd

function leo(oscar){
  if (oscar === 88){
    return "Leo finally won the oscar! Leo is happy";
  } else if (oscar === 86){
    return "Not even for Wolf of wallstreet?!"
  } else if (oscar > 88){
    return "Leo got one already!"
  } else if (oscar < 88){
    return "When will you give Leo an Oscar?"
  } else {
    return ''
  }
}
leo(89) // "Leo got one already!") 
leo(88) // "Leo finally won the oscar! Leo is happy")
leo(87) // "When will you give Leo an Oscar?")
leo(86) // "Not even for Wolf of wallstreet?!")