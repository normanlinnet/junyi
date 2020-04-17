const calculate = number => Array
  .from({ length: number })
  .map((_, i) => i + 1)
  .filter(num => {
    if (num % 3 === 0 && num % 5 === 0) return true;
    if (num % 3 === 0 || num % 5 === 0) return false;
    return true;
  })
  .length;

export default calculate;
