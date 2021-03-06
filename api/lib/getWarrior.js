const d20 = require('./d20');

module.exports = () => ({
  strength: Math.min(d20() + 3, 20),
  dexterity: d20(),
  constitution: d20(),
  intelligence: Math.max(d20() - 3, 1),
  wisdom: d20(),
  charisma: d20()
});
