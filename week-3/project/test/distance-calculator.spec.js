"use strict";

const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

function testEarthToMars() {
  try {
    const result = calculateDistance('Earth', 'Mars');
    assert.strictEqual(result, 0.52);
    console.log("Passed testEarthToMars");
    return true;
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

function testVenusToJupiter() {
  try {
    const result = calculateDistance('Venus', 'Jupiter');
    assert.strictEqual(result, 4.48);
    console.log("Passed testVenusToJupiter");
    return true;
  } catch (error) {
    console.error(`Failed testVenusToJupiter: ${error.message}`);
    return false;
  }
}

function testSamePlanet() {
  try {
    const result = calculateDistance('Earth', 'Earth');
    assert.strictEqual(result, 0);
    console.log("Passed testSamePlanet");
    return true;
  } catch (error) {
    console.error(`Failed testSamePlanet: ${error.message}`);
    return false;
  }
}

testEarthToMars();
testVenusToJupiter();
testSamePlanet();