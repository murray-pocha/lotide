const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("🟢🟢🟢" + " Assertion Passed: " + "Lighthouse Labs" + " === " + "Bootcamp");
  } 
  else {
    console.log("🛑🛑🛑" + " Assertion Failed: " + "Lighthouse Labs" + " !== " + "Bootcamp");
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
