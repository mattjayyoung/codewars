
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

// Reverse Words - 7kyu (Apr 3rd)

/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
*/

function reverseWords(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
  }

// Between Extremes - 7kyu (Apr 4th)

/*

Given an array of numbers, return the difference between the largest and smallest values.

The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.

*/

function betweenExtremes(numbers) {
  const sortedNum = numbers.sort((a,b) => a - b)

  return sortedNum[sortedNum.length - 1] - sortedNum[0]
  
}

// Fix My Phone Numbers! - 7kyu (Apr 6th)

/*

Phone numbers are stored as strings and comprise 11 digits, eg '02078834982' and must always start with a 0. 

However, something strange has happened and now all of the phone numbers contain lots of random characters, whitespace and some are not phone numbers at all!

Given a string, you must decide whether or not it contains a valid phone number. If it does, return the corrected phone number as a string ie. '02078834982' with no whitespace or special characters, else return "Not a phone number".

*/

function isItANum(str) {

  const nums = str.split(' ').join('').split('').filter(char => char >= 0).join('')
  return nums[0] === '0' && nums.length === 11 ? nums : 'Not a phone number'
}

// Cats and shelves - 7kyu (Apr 7th)

/*

The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head), according to the illustration:

                 ┌────────┐
                 │-6------│
                 └────────┘
┌────────┐       
│------5-│        
└────────┘  ┌─────► OK!
            │    ┌────────┐
            │    │-4------│
            │    └────────┘
┌────────┐  │
│------3-│  │     
BANG!────┘  ├─────► OK! 
  ▲  |\_/|  │    ┌────────┐
  │ ("^-^)  │    │-2------│
  │ )   (   │    └────────┘
┌─┴─┴───┴┬──┘
│------1-│
└────────┘

Input
Start and finish shelf numbers (always positive integers, finish no smaller than start)

Task
Find the minimum number of jumps to go from start to finish

Example
Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)

*/

function solution(start, finish) {
  let jumpCount = 0
  let i = start
  
  while (i < finish){
    
    if (finish - i >= 3){
    i += 3
    } else if (finish - i >= 1) {
      i += 1
    } 
    jumpCount++
  }
  return jumpCount
}

// Anagram Detection - 7kyu (Apr 8th)

/*

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

*/

function isAnagram(test, original) {
  const sortedTest = test.toLowerCase().split('').sort().join()
  const sortedOriginal = original.toLowerCase().split('').sort().join()
return sortedTest === sortedOriginal ? true : false
};

