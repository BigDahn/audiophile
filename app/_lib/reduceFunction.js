export function reduce(data) {
  return data.reduce((curr, acc) => {
    return acc.quantity * acc.price + curr;
  }, 0);
}
// new Intl.NumberFormat().format()
