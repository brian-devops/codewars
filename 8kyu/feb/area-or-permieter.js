const areaOrPerimeter = function(l, w) {
  // Return your answer
  if (l === w) {
    return l * w;
  } else {
    return l * 2 + w * 2;
  }
};

// Shortened
// const areaOrPerimeter = (l, w) => l == w ? l * w : l * 2 + w * 2
