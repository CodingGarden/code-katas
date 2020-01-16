function minDistanceToAgent(location, agents) {
  return agents.reduce((minDistance, [x, y]) => {
    const distance = Math.abs(x - location.x) + Math.abs(y - location.y);
    if (distance < minDistance) {
      return distance;
    }
    return minDistance;
  }, Infinity);
}

function advice(agents, length) {
  agents = agents.filter(([x, y]) => x < length && y < length);
  if (agents.length === length ** 2) return [];
  let maxDistance = -Infinity;
  let minDistanceCoords = [];
  for (let x = 0; x < length; x++) {
    for (let y = 0; y < length; y++) {
       const minDistance = minDistanceToAgent({ x, y }, agents);
       if (minDistance !== 0 && minDistance > maxDistance) {
         maxDistance = minDistance;
         minDistanceCoords = [[x, y]]
       } else if (minDistance !== 0 && minDistance == maxDistance) {
         minDistanceCoords.push([x, y]);
       }
    } 
  }
  return minDistanceCoords;
}

module.exports = advice;

// function advice(allAgents, length, agents = allAgents.filter(([x, y]) => x < length && y < length), maxDistance = -Infinity) {
//   return agents.length === length ** 2 ? [] : Array.from({ length: length ** 2 }, (_, i) => ({ x: i % length, y: Math.floor(i / length)})).reduce((minDistanceCoords, { x, y }, _, $, minDistance = agents.reduce((minDistance, [x2, y2], _, $, distance = Math.abs(x2 - x) + Math.abs(y2 - y)) => distance < minDistance ? distance : minDistance, Infinity)) => ((minDistance !== 0 && minDistance > maxDistance) ? (maxDistance = minDistance, [[x, y]]) : (minDistance !== 0 && minDistance == maxDistance) ? (minDistanceCoords.push([x, y]), minDistanceCoords) : minDistanceCoords), []);
// }