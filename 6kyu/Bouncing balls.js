// Bouncing Balls - 6kyu (Apr 18th)

// PREP

//P - h = height of the floor above ground, > 0; bounce greater than 0, less than 1; window < h - if all fulfilled, return a positive integer, if NOT, return -1

// ball can only be seen if the height of the REBOUNDING ball is greater than the window parameter
//R - number of times the mother sees the ball pass (include when the ball falls and bounce)

//P

function bouncingBall(h,  bounce,  window) {
  /* 
  h is where the child drops from, later becomes the peak of bounce
  bounce is the product of bounce and h

  // initial return value starts at 1 because the ball falls to the ground past the window

  // conditional h > 0 && h > window && 0 < bounce < 1; else return -1 

  // start the count at 1

  // bounce1 = h * bounce

  //loop
  // conditional - if bounce1 > window => count++ // else return count
  // count++ (ball falls) 
  */

  if (!(h > 0 && h > window && bounce < 1 && bounce > 0)){
    return -1
  } else {
    let count = 1
    let newHeight = h * bounce // 1.98
    while (newHeight > window){
      if (newHeight > window){
      count += 2
      newHeight *= bounce
    } else {
      count++
    }
  }
  return count
}
}


//E

bouncingBall(3.0, 0.66, 1.5) // 3
bouncingBall(2.0, 0.66, 1.5) // 1
bouncingBall(30.0, 0.66, 1.5) // 15
bouncingBall(3.0, 1.0, 1.5) // -1


//Refactored

function bouncingBall(h, bounce, window) {
  if (h <= 0 || window >= h || bounce <= 0 || bounce >= 1) {
    return -1;
  }

  let count = 1;
  let newHeight = h * bounce;

  while (newHeight > window) {
    count += 2;
    newHeight *= bounce;
  }

  return count;
}