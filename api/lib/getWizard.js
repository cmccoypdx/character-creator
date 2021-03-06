const d20 = require('./d20');

module.exports = () => ({
  strength: Math.max(d20() - 3, 1),
  dexterity: d20(),
  constitution: d20(),
  intelligence: Math.min(d20() + 3, 20),
  wisdom: d20(),
  charisma: d20()
});
