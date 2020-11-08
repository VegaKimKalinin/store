export function basketCounter(count) {
  return Object.values(count).reduce((acc, currentValue) => {
    acc += currentValue;
    return acc;
  }, 0);
}
