// Kebabize - 6kyu (December 25th)

function kebabize(str) {
 
  let result = ""

  result += str[0]

  console.log(result)

  for (let i = 1; i < str.length; i++){
    if (str[i] !== str[i].toLowerCase()){
      result += "-" + str[i]
    } else {
      result += str[i]
    }
  }
  return result.toLowerCase().match(/[^0-9]/ig).join('')
}


kebabize('MyCamelCasedString') // 'my-camel-cased-string'],
    kebabize('myCamelCasedString') // 'my-camel-cased-string'],
    kebabize('MyCamelHas3Humps') // 'my-camel-has-humps'],
    kebabize('myCamelHas3Humps') // 'my-camel-has-humps'],
    kebabize('CAMEL') // 'c-a-m-e-l'],
    kebabize('cAMEL') // 'c-a-m-e-l'],
    kebabize('AbstractSingletonProxyFactoryBean') // 'abstract-singleton-proxy-factory-bean'],
    kebabize('abstractSingletonProxyFactoryBean') // 'abstract-singleton-proxy-factory-bean'],