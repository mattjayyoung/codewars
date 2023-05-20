// Simple Fun: the Shortest Time - 6kyu (May 20th)


//PREP

//P - (n,m,[a, b, c, d])

// n: An integer. The floor of John(0-based).
// m: An integer. The floor of the elevator(0-based).
// speeds: An array of integer. It contains four integer [a,b,c,d]
//         a: The seconds required when the elevator rises or falls 1 floor
//         b: The seconds required when the elevator open the door
//         c: The seconds required when the elevator close the door
//         d: The seconds required when John walks to n-1 or n+1 floor

//R - return the shortest time to reach n = 0


function shorterestTime(n,m,speeds) {

  const walkTime = n * speeds[3]
  const elevatorTime = speeds[0] * (Math.abs(m - n)) + (2 * speeds[1]) + speeds[2] + (n * speeds[0])
  const elevatorPlusWalk = speeds[3] * (Math.abs(n - m)) + (2 * speeds[1]) + speeds[2] + (m * speeds[0])

  return !n ? 0 : walkTime < elevatorTime && walkTime < elevatorPlusWalk ? walkTime : elevatorTime < elevatorPlusWalk ? elevatorTime : elevatorPlusWalk

}
shorterestTime(4,5,[1,2,3,10])

walkTime = 40
elevatorTime = 


// 40 seconds to walk down from 4 => 0 (10 seconds to walk down one floor) => n * d


a * (m - n) + b + c + (n * a) + b
1 * (5 - 4) + 2 + 3 + (4 * 1) + b
1 + 2 + 3 + 4 + 2 
= 12

10 * 

a * (m - n) + b + c + (n * a) + b
1 * (5 - 0) + 2 + 3 + (0 * 1) + 2
1 * 5 + 2 + 3 + 0 + 2
= 12 // if n is 0, output should be 0

a * (m - n) + b + c + (n * a) + b
2 * Math.abs(3 - 4) + 3 + 4 + (4 * 2) + 3
2 * 1 + 3 + 4 + 8 + 3
2 + 3 + 4 + 8 + 3
= 20

n,m,[a, b, c, d]
7,6,[3, 1, 1, 4]

a * (m - n) + b + c + (n * a) + b
3 * Math.abs(6 - 7) + 1 + 1 + (7 * 3) + 1
3 * 1 + 1 + 1 + 21 + 1
3 + 1 + 1 + 21 + 1
= 27

4 * 7 = 28 (pure walk)

n,m,[a, b, c, d]
7,6,[3,1,1,4]

a * (m - n) + b + c + (n * a) + b
3 * (6 - 7) + 1 + 1 + (7 * 3) + 1
3 * 1 + 2 + 21 + 1
3 + 2 + 21 + 1
= 27 (PURE Elevator)

walkTime = 28

elevatorPlusWalk




shorterestTime(4,5,[1,2,3,10]) // 12

shorterestTime(0,5,[1,2,3,10]) // 0
shorterestTime(4,4,[1,2,3,10]) // 11
shorterestTime(1,1,[1,2,3,10]) // 8
shorterestTime(1,1,[2,3,4,10]) // 10
shorterestTime(4,3,[1,2,3,10]) // 12
shorterestTime(4,3,[2,3,4,5]) // 20
shorterestTime(7,6,[3,1,1,4]) // 25



