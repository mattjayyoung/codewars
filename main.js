
// Get the Middle Character - 7kyu

/* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters. */

function getMiddle(str){
    if (str.length % 2 === 0){
        return str.charAt((str.length / 2) - 1) + str.charAt(str.length / 2)
    } else {
        return str.charAt(Math.ceil(str.length / 2) - 1)
    }
}

// Tribonacci Sequence - 6kyu

/*

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next.

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]

But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)


*/

function tribonacci(signature,n){
    let newSequence = signature
    
    if (n === 0){
        return []
    } else if (n === 1) {
        return [newSequence[0]]

    } else {

    for (let i = 3; i < n; i++){
        signature[i] = signature[i - 3] + signature[i - 2] + signature[i - 1]
        newSequence.push(signature[i])
        newSequence.pop()
    }
    return newSequence
}
  }


// Remove the minimum - 7kyu

/*

Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

*/


  function removeSmallest(numbers) {
    const newArray = Array.from(numbers)
    const outputArray = Array.from(numbers)
    
    newArray.sort((a,b) => a - b)
    const lowestNumberPosition = outputArray.indexOf(newArray[0])
    outputArray.splice(lowestNumberPosition, 1)
    return outputArray
    
  };

// Growth of a Population - 7kyu

/*
In a small town the population is "p0" at the beginning of a year. The population regularly increases by "percent" percent per year and moreover "aug" new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to "p" inhabitants?

More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

*/

function nbYear(p0, percent, aug, p) {
    let n = 0
    for (let i = 0; p0 < p; i++){
        p0 += Math.floor(p0 * percent / 100) + aug
        n += 1   
    }
  return n
}
