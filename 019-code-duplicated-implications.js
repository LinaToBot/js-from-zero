// object literal notation

const rocket = {
  name: "Falcon 11",
  takeoffMessage: function takeoffMessage() {
    console.log("🔥");
  },
};

// If we wish create another rocket you have to duplicate code. That it's:
// 1. Difficult maintenance.
// 2. Increased complexity.
// 3. Increased probability of errors.
// 4. Difficulty to scale.
// 5. Time and resources.
// 6. DRY principles violation.(Don't Repeat Yosurself)
// 7. Difficulty in identifying errors.

// Duplicated code
function calculateSquareAreaWithMeasureA(measureA) {
  return measureA * measureA;
}

// ... with measure B...

function calculateSquareAreaWithMeasureB(measureB) {
  return measureB * measureB;
}

// Without duplicating the code
function calculateSquareArea(measure) {
  return measure * measure;
}

// You can use calculateSquareArea function for many cases
let measureA = calculateSquareArea(measureA);
let measureB = calculateSquareArea(measureB);
