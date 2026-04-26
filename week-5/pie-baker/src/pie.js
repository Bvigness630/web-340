/**
 * Author: Boyd Vigness
 * Date: 4/26/2026
 * File Name: pie.js
 * Description:
 */
"use strict";

function bakePie(pieType, ingredients) {
  const essentials = ["flour", "sugar", "butter"];

  for (let item of essentials) {
    if (!ingredients.includes(item)) {
      console.warn(`Missing essential ingredient: ${item}`);
      process.exit(1);
    }
  }

  return `Successfully baked a ${pieType} pie!`;
}

module.exports = { bakePie };