/**
 * @param {number[]} light
 * @return {number}
 */
 const numTimesAllBlue = (light) => {
    
  // Catch edge case for no lights on
  if (light.length < 1) {
      return 0;
  }
  
  // Catch edge case for only one light on
  if (light.length == 1) {
      return 1;
  }
  
  let allBlueMomentsCount = 0;    // Counter for moments where all lights are blue
  let lightFilledToIndex = 0;     // Lights fully filled up from 0 to this index
  let lightbulbs = [];            // Array of lights - potentially don't need
  
  // For each light to be turned on in "lights"...
  light.forEach((val, idx) => {
      // Change color to "yellow" if there are bulbs to the left that are not on.
      // Change color to "blue" if all the bulbs to the left have been filled.
      // - Also, if there is a yellow bulb to the immediate right, change that to blue as well.
      
      // Check to see if all bulbs are blue.
      // - If so, increment "allBlueMomentsCount"
  })
};

module.exports = numTimesAllBlue;