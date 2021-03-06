const d20 = require('./d20');

module.exports = () => ({
  strength: d20(),
  dexterity: Math.min(d20() + 3, 20),
  constitution: d20(),
  intelligence: d20(),
  wisdom: Math.max(d20() - 3, 1),
  charisma: d20()
});
