function bouncingBall(h,  bounce,  window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
  // a place to store number of times past window - initialized to 1
  let times = 1;
  // place to store current height - initialized to h
  let currentHeight = h;
  
  // while current height is greater than window height
  while (currentHeight >= window) {
    currentHeight *= bounce;
    if (currentHeight > window) {
      times += 2;
    } else if (currentHeight === window) {
      times += 1;
    }
  }

  // return number of times past window
  return times;
}

function bouncingBall(h,  bounce,  window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
  // w / h = b ^ numBounces
  // log base b of w / h

  // log (w / h) / log ( b )
  return Math.floor(Math.log(window / h) / Math.log(bounce)) * 2 + 1;
}

console.log(bouncingBall(3.0, 0.66, 1.5), 3);
console.log(bouncingBall(30.0, 0.66, 1.5), 15);
