// Snakes & Ladders - 6kyu (June 27th)

function snakesAndLadders (board, dice) {
  let placeOnBoard = 0

  for (let i = 0; i < dice.length; i++){
    
    if ((dice[i] + placeOnBoard) <= board.length - 1){
      placeOnBoard += dice[i]
    }
  
    if (board[placeOnBoard] > 0 && (dice[i] + placeOnBoard) <= board.length - 1){
      placeOnBoard += board[placeOnBoard]
      
    } else if (board[placeOnBoard] < 0 && (dice[i] + placeOnBoard) <= (board.length - 1)){
      
      placeOnBoard += board[placeOnBoard]
      
    } else if (board[placeOnBoard] < 0){
      
      placeOnBoard += board[placeOnBoard]
      
    } else if (board[placeOnBoard] > 0){
    
      placeOnBoard += board[placeOnBoard]
      
    }  
    else if (placeOnBoard === board.length){
      return board.length
    } 
    
  }

  return placeOnBoard
}

/*

Start from index 0 (0)
Roll 6, move +6 to index 6 (0)
Land on index 6 (0), nothing happens
Roll 2, move +2 to index 8 (0)
Land on index 8 (0), nothing happens
Roll 1, move +1 to index 9 (0)
Land on index 9 (0), nothing happens
Roll 6, move +6 to index 15 (-11)
Land on index 15 (-11), move -11 to index 4 (0)
Roll 5, move + 5 to index 9 (0)
Land on index 9 (0), nothing happens
Roll 2, move +2 to index 11 (0)
Roll 2, move + 2 to index 13 (0)
Roll 5, move +5 to index 18 (0)
Roll 4, move +4 to index 22 (-2)
Land on index 22 (-2), move -2 to index 20
Roll 6, move +6 to index 26 (2)
Land on index 26 (2), move +2 to index 28

*/


let dice = [6,2,1,6,5,2,2,5,4,6]
let board = [0,0,6,0,0,8,0,0,0,0,2,0,0,0,9,-11,8,0,0,0,0,0,-2,0,0,0,2,0,0,0]


// 28
snakesAndLadders(board,dice)



















let dice = [2,6,2,3,2,3,3,3,6,4]
let board = [0,0,1,0,0,1,0,0,8,0,0,0,0,0,0,3,0,0,0,2,0,0,0,0,4,-8,0,0,0,0]
// 28

snakesAndLadders(board,dice)




let dice = [6,2,2,4,4,1,4,5,3,6]
let board = [0,5,1,0,0,0,0,0,0,0,0,6,0,0,0,6,0,0,0,-10,0,0,0,4,-2,0,0,0,0,0]
// 27
snakesAndLadders(board,dice)


let board = [0,0,3,0,0,0,0,-2,0,0,0]
let dice = [2,1,5,1,5,4]
 // 10

snakesAndLadders(board,dice)

// no moves possible
let board = [ 0, 0, 0, 0, 0 ]
let dice = [ 6, 6, 6, 6, 6, 6 ] 

// 0

snakesAndLadders(board,dice)

let board = [ 0, 0, 0, 0, 0 ]
let dice = [] 
// 0

snakesAndLadders(board,dice)

let board = [ 0, 0, 0, 0, 0 ]
let dice = [ 1, 1, 1 ] // 3

snakesAndLadders(board,dice)

let board = [ 0, 0, 0, 0, 0 ]
let dice = [ 1, 1, 1, 6 ] // 3

snakesAndLadders(board,dice)

let board = [ 0, 0, 0, 0, 0, 0, 0 ]
let dice = [ 1, 2, 3 ] // 6

snakesAndLadders(board,dice)

let board = [ 0, 0, 0, 0, -2, 0, 0]
let dice = [ 4, 4 ] // 6

snakesAndLadders(board,dice)


let board = [ 0, 4, 0, 0, 0, 0 ]
let dice = [ 1, 1 ]

// 5

snakesAndLadders(board,dice)

let board = [ 0, 5, 0,  0, 0, 0, 0, 0, -4, 0, 0]
let dice = [ 1, 2, 3, 4, 5, 6 ]

// 7

snakesAndLadders(board,dice)













let board = [ 0, 1, 0, 1, 0, 0 ]
let dice = [ 1, 1 ] // 4

snakesAndLadders(board,dice)