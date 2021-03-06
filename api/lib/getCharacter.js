const getRogue = require('./getRogue');
const getWarrior = require('./getWarrior');
const getWizard = require('./getWizard');
const getFantasyName = require('./getFantasyName');
const getAlignment = require('./getAlignment');

module.exports = (inputName, charClass, birthDate) => {
  const stats = {};
  const charName = getFantasyName(inputName);
  switch (charClass) {
    case 'wizard':
      Object.assign(stats, getWizard());
      break;
    case 'warrior':
      Object.assign(stats, getWarrior());
      break;
    case 'rogue':
      Object.assign(stats, getRogue());
      break;
    default:
      throw new Error('Please provide a valid class');
  }
  return ({
    name: charName,
    alignment: getAlignment(birthDate),
    stats
  })
}
