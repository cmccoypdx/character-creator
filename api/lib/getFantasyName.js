module.exports = inputName =>
  inputName
    .split(' ')
    .map(name => {
      const backwards = name.toLowerCase().split('').reverse();
      backwards[0] = backwards[0].toUpperCase();
      return backwards.join('');
    })
    .join(' ');
