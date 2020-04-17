const stringReverseB = (str = '') => str
  .split(' ')
  .map(el => el.split('').reverse().join(''));

export default stringReverseB;
