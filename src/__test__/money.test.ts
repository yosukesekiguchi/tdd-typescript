import { Dollar } from "../Dollar";

describe("money", () => {
  it("Multiplication", () => {
    const five = new Dollar(5);

    let product = five.times(2);
    expect(product.amount).toEqual(10);

    product = five.times(3);
    expect(product.amount).toEqual(15);
  });

  it("Equality", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
  })
});