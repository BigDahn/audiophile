export const shipping = 50;

export function VAT(price) {
  return Math.round(0.2 * Number(price));
}
