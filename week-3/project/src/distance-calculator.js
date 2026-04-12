"use strict";

function calculateDistance(planet1, planet2) {

  const planetDistances = {
    Mercury: 0.39,
    Venus: 0.72,
    Earth: 1.00,
    Mars: 1.52,
    Jupiter: 5.20,
    Saturn: 9.58,
    Uranus: 19.20,
    Neptune: 30.05
  };

  // Validate planets
  if (!planetDistances[planet1] || !planetDistances[planet2]) {
    throw new Error("Invalid planet name");
  }

  // Calculate and return distance
  return Math.abs(planetDistances[planet1] - planetDistances[planet2]);
}

module.exports = calculateDistance;

module.exports = calculateDistance;