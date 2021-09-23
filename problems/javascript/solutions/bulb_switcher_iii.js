/**
 * @param {number[]} lights
 * @return {number}
 */

const numTimesAllBlue = (lights) => {
  let allBlueMoments = 0;
  let highestLightIndexChecked = 0;
  let lightsOn = 0;

  // A-ha Moment: Blue moments only happen when the number of lights turned on matches the highest light index checked so far.

  // For each light we turn on...
  lights.forEach(light => {

    // Increment the lightsOn counter by 1
    lightsOn += 1;
    
    // If the current light index is higher than the last checked highest light index...
    if (light > highestLightIndexChecked) {
      // Set the last checked highest light index to the current light index.
      highestLightIndexChecked = light;
    }

    // If the number of lights on is the same as the last checked highest light index... 
    if (lightsOn == highestLightIndexChecked) {
      // A blue moment occurs. Increment allBlueMoments by 1.
      allBlueMoments += 1;
    }
  })

  // Return the counter representing all of the blue moments that occurred.
  return allBlueMoments;
}

export default numTimesAllBlue;