/**
 * MCP Dice Roller
 * A simple utility for rolling dice in tabletop games
 */

/**
 * Rolls a die with the specified number of sides
 * @param {number} sides - Number of sides on the die
 * @returns {number} - Result of the dice roll (1 to sides)
 */
function rollDie(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

/**
 * Rolls multiple dice with the specified number of sides
 * @param {number} count - Number of dice to roll
 * @param {number} sides - Number of sides on each die
 * @returns {Object} - Contains results array and sum of all dice
 */
function rollDice(count, sides) {
  const results = [];
  let total = 0;
  
  for (let i = 0; i < count; i++) {
    const roll = rollDie(sides);
    results.push(roll);
    total += roll;
  }
  
  return {
    results,
    total
  };
}

/**
 * Parses standard dice notation (e.g., "2d6", "1d20")
 * @param {string} notation - Dice notation string
 * @returns {Object} - Results of the dice roll
 */
function parseDiceNotation(notation) {
  const regex = /^(\d+)d(\d+)$/i;
  const match = notation.match(regex);
  
  if (!match) {
    throw new Error('Invalid dice notation. Please use format like "2d6" or "1d20".');
  }
  
  const count = parseInt(match[1], 10);
  const sides = parseInt(match[2], 10);
  
  return rollDice(count, sides);
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    rollDie,
    rollDice,
    parseDiceNotation
  };
}
