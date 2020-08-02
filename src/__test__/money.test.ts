import {Money} from "../Money";

describe("money", () => {
  it("Multiplication", () => {
    const five = Money.dollar(5) as Money;
    expect(Money.dollar(10)).toEqual(five.times(2));
    expect(Money.dollar(15)).toEqual(five.times(3));
  });

  it("Equality", () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
    expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
  })

  it("Currency", () => {
    expect(Money.dollar(1).currency()).toEqual("USD");
    expect(Money.franc(1).currency()).toEqual("CHF");

  });

});