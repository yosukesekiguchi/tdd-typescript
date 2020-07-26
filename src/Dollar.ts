export class Dollar {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  public equals(object: Dollar): boolean {
    const dollar: Dollar = object;
    return this.amount === dollar.amount;
  }
}
