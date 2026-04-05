/**
 * Author: Boyd Vigness
 * Date: 4/5/2026
 * File Name: recipes.js
 * Description:
*/

"use strict";

// Define the createRecipe function
function createRecipe(ingredients) {
  return `Recipe created with ingredients: ${ingredients.join(", ")}`;
}

// Define the setTimer function
function setTimer(minutes) {
  return `Timer set for ${minutes} minutes`;
}

// Define the quit function
function quit() {
  return "Program exited";
}

// Export the functions
module.exports = {
  createRecipe,
  setTimer,
  quit
};