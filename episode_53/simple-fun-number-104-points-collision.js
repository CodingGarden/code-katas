// THIS IS BROKEN. DO NOT ATTEMPT THIS KATA UNLESS YOU KNOW MATHS.
// See Hydras Maybe Solution here: https://pastebin.com/GwnbPSGB
// See these maybe solutions too: https://jsfiddle.net/f94voh1w/ or https://jsfiddle.net/v3m4c9po/1/
// https://pastebin.com/41zRb7dL

// slope:
// y / x = m

//harshitnothingspecial 
// (p1-p2)/(v2-v1) to calculate time in both axis if time is same both will colide

// HydraSlayer7
// you can solve for when the x coordinates are equal, and check if it is the same as when the y coordinates are equal

// function createPoint([x, y]) {
//   return { x, y };
// }

// function distance({ location: location1 }, { location: location2 }) {
//   Math.hypot
//   return Math.sqrt((location1.x - location2.x)**2 + (location1.y - location2.y)**2);
// }

function pointsCollision(point1, point2, point1Velocity, point2Velocity) {
  // HydraSlayer7
  // (x0-x1)/(vx0-vx1)=t, then do the same thing for y and see if they are equal
  if (point1[0] === point2[0] && point1[1] === point2[1]) return true;
  // if (point1Velocity[1] / point1Velocity[0] === point2Velocity[1] / point2Velocity[0]) return false;
  // harshitnothingspecial
  // cj make sure to check when vx0-vx1==0
  const xvdiff = point1Velocity[0]-point2Velocity[0];
  if (xvdiff == 0) return false;
  const xt =(point1[0] - point2[0]) /
    (xvdiff);
  const yvdiff = point1Velocity[1]-point2Velocity[1];
  if (yvdiff == 0) return false;
  const yt =(point1[1] - point2[1]) /
    (yvdiff);
  
  return xt === yt && xt > 0 && yt > 0;
  
  // const fred = {
  //   location: createPoint(point1),
  //   velocity: createPoint(point1Velocity),
  // };
  // const samantha = {
  //   location: createPoint(point2),
  //   velocity: createPoint(point2Velocity),
  // };

  // You have to use y=y0 + v*t, is position in time

  
  // if (fred.location.x === samantha.location.x
  //     && fred.location.y === samantha.location.y) {
  //   return true;
  // }

  // // while x is not the same
  // while(fred.location.x !== samantha.location.x) {
  //   const currentDistance = distance(fred, samantha);
  //   // increase point1 by velocity
  //   fred.location.x += fred.velocity.x;
  //   fred.location.y += fred.velocity.y;
  //   // increase point2 by velocity
  //   samantha.location.x += samantha.velocity.x;
  //   samantha.location.y += samantha.velocity.y;
  //   const nextDistance = distance(fred, samantha);
  //   if (nextDistance > currentDistance) return false;
  // }

  // // if y is the same, collide!
  // if (fred.location.y === samantha.location.y) return true;
  // // else no collide
  // return false;
}

console.log(pointsCollision([0, 0],[10, 0],[40, 0],[-30, 0]),true);
console.log(pointsCollision([1, 7],[1, -3],[0, 1],[0, -1]),false);
console.log(pointsCollision([1, 1],[30, 30],[5, 5],[4, 4]),true);
console.log(pointsCollision([-3, 0],[-2, 0],[2, 0],[2, 0]),false);
console.log(pointsCollision([1, 1],[8, 2],[2, 6],[-12, 4]),true);
console.log(pointsCollision([1, 1],[8, 2],[-2, -6],[12, -4]),false);
console.log(pointsCollision([1, 1],[1, 1],[-2, -6],[12, -4]),true);
console.log(pointsCollision([1, 1],[1, 1],[0, 0],[0, 0]),true);
console.log(pointsCollision([1, 1],[2, 2],[0, 0],[0, 0]),false);