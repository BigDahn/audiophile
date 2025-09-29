export function reduce(data) {
  return new Intl.NumberFormat().format(
    data.reduce((curr, acc) => {
      return acc.quantity * acc.price + curr;
    }, 0)
  );
}
