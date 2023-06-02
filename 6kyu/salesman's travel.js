function travel(r, zipcode) {
    console.log(r)
    let arrAddress = r.split(',')
    let finalStr = `${zipcode}:`
    let streetNumbers = []
    let zipcodeS = zipcode.split(' ')

    console.log(zipcode)
 
    if (zipcode === ""){
        return ":/"

    } else if (!r.includes(zipcodeS[1]) && zipcodeS[1].length === 5 || zipcodeS[1].length !== 5){
        
        return `${zipcode}:/`
        
    } else {

    for (let i = 0; i < arrAddress.length; i++){
        if (arrAddress[i].includes(zipcodeS[1]) && zipcodeS[1].length === 5){
         
            let splitAddress = arrAddress[i].split(' ')
          
            let dot = arrAddress[i].indexOf(".")
            
            let streetName = `,${splitAddress.slice(1, splitAddress.length - 3).join(' ')}`
            
            let cityName = splitAddress[splitAddress.length - 3]
            

            finalStr += `${streetName}`
            finalStr += ` ${cityName}`             

        }
    }

    for (let i = 0; i < arrAddress.length; i++){
        if (arrAddress[i].includes(zipcodeS[1])){
        let splitAddress = arrAddress[i].split(' ')
        streetNumbers.push(splitAddress[0])
        }
    }

    let comma = finalStr.indexOf(',')
    let noCommaStr = finalStr.slice(comma + 1, finalStr.length)
    let withoutZipCode = `${zipcode}:${noCommaStr}`

    return `${withoutZipCode}/${streetNumbers.join(',')}`
    }

}

const ad = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432,"
  + "54 Holy Grail Street Niagara Town ZP 32908,3200 Main Rd. Bern AE 56210,1 Gordon St. Atlanta RE 13000,"
  + "10 Pussy Cat Rd. Chicago EX 34342,10 Gordon St. Atlanta RE 13000,58 Gordon Road Atlanta RE 13000,"
  + "22 Tokyo Av. Tedmondville SW 43098,674 Paris bd. Abbeville AA 45521,10 Surta Alley Goodtown GG 30654,"
  + "45 Holy Grail Al. Niagara Town ZP 32908,320 Main Al. Bern AE 56210,14 Gordon Park Atlanta RE 13000,"
  + "100 Pussy Cat Rd. Chicago EX 34342,2 Gordon St. Atlanta RE 13000,5 Gordon Road Atlanta RE 13000,"
  + "2200 Tokyo Av. Tedmondville SW 43098,67 Paris St. Abbeville AA 45521,11 Surta Avenue Goodtown GG 30654,"
  + "45 Holy Grail Al. Niagara Town ZP 32918,320 Main Al. Bern AE 56215,14 Gordon Park Atlanta RE 13200,"
  + "100 Pussy Cat Rd. Chicago EX 34345,2 Gordon St. Atlanta RE 13222,5 Gordon Road Atlanta RE 13001,"
  + "2200 Tokyo Av. Tedmondville SW 43198,67 Paris St. Abbeville AA 45522,11 Surta Avenue Goodville GG 30655,"
  + "2222 Tokyo Av. Tedmondville SW 43198,670 Paris St. Abbeville AA 45522,114 Surta Avenue Goodville GG 30655,"
  + "2 Holy Grail Street Niagara Town ZP 32908,3 Main Rd. Bern AE 56210,77 Gordon St. Atlanta RE 13000"



travel(r,"AA 45522")
travel(r,"EX 34342")
travel(r,"EX 34345")
travel(r,"AA 45521")
travel(r,"AE 56215")
travel(r,"GG 30654")
travel(r,"OH 43071")
travel(r,"AE 56210")
travel(r,"YY 45098")








  const code = "OH 43071,NY 56432,ZP 32908,AE 56210,RE 13000,EX 34342,SW 43098,AA 45521,GG 30654,ZP 32908,AE 56215,RE 13200,EX 34345,"
  + "RE 13222,RE 13001,SW 43198,AA 45522,GG 30655,XX 32321,YY 45098"


r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"


travel(r, "NY 5643") // "NY 5643:/"

travel(r, "NY 56432") --> "NY 56432:High Street Pollocksville/786"

travel(r, "OH 43071") --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"


r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432,54 Holy Grail Street Niagara Town ZP 32908,3200 Main Rd. Bern AE 56210,1 Gordon St. Atlanta RE 13000,10 Pussy Cat Rd. Chicago EX 34342,10 Gordon St. Atlanta RE 13000,58 Gordon Road Atlanta RE 13000,22 Tokyo Av. Tedmondville SW 43098,674 Paris bd. Abbeville AA 45521,10 Surta Alley Goodtown GG 30654,45 Holy Grail Al. Niagara Town ZP 32908,320 Main Al. Bern AE 56210,14 Gordon Park Atlanta RE 13000,100 Pussy Cat Rd. Chicago EX 34342,2 Gordon St. Atlanta RE 13000,5 Gordon Road Atlanta RE 13000,2200 Tokyo Av. Tedmondville SW 43098,67 Paris St. Abbeville AA 45521,11 Surta Avenue Goodtown GG 30654,45 Holy Grail Al. Niagara Town ZP 32918,320 Main Al. Bern AE 56215,14 Gordon Park Atlanta RE 13200,100 Pussy Cat Rd. Chicago EX 34345,2 Gordon St. Atlanta RE 13222,5 Gordon Road Atlanta RE 13001,2200 Tokyo Av. Tedmondville SW 43198,67 Paris St. Abbeville AA 45522,11 Surta Avenue Goodville GG 30655,2222 Tokyo Av. Tedmondville SW 43198,670 Paris St. Abbeville AA 45522,114 Surta Avenue Goodville GG 30655,2 Holy Grail Street Niagara Town ZP 32908,3 Main Rd. Bern AE 56210,77 Gordon St. Atlanta RE 13000"

travel(r, "YY 45098")




function checkIfPresent(str){
    return str.includes(43071) ? true : false


}

checkIfPresent("123 Main Street St. Louisville OH 43071")

/*

-split the string into an array
-find index of element with zipcode
-splice it at that point and push it into an array


*/

function travel(r, zipcode) {
    let rArr = r.split(',')
    let zipcodes = []
    let zipcodesSplit = []
    let str = `${zipcode}:`

    for (let i = 0; i < rArr.length; i++){
        if (rArr[i].includes(zipcode)){
            zipcodes.push(rArr[i])
        }
    }
    // console.log(zipcodes)

    zipcodes.forEach(el => zipcodesSplit.push(el.split(' ')))
    
    for(let i = 0; i < zipcodesSplit.length; i++){
        str += `${zipcodesSplit[i][1]} ${zipcodesSplit[i][2]} ${zipcodesSplit[i][3]},` 
    }

    console.log(zipcodesSplit)
    
    let comma = str.lastIndexOf(",")

    let finalString = str.slice(0, comma) + '/'
    

    for(let i = 0; i < zipcodesSplit.length; i++){
        finalString += `${zipcodesSplit[i][0]},`
    }

    comma = finalString.lastIndexOf(",")

return finalString.slice(0, comma)
    

}