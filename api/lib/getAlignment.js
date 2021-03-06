const modifiers = ['Lawful', 'True', 'Chaotic'];
const alignments = ['Good', 'Neutral', 'Evil'];

module.exports = birthDate => {
  const [month, day] = birthDate.split('/').map(s => parseInt(s));
  return `${modifiers[month % 3]} ${alignments[day % 3]}`;
};
