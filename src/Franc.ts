export class Franc {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }

  public equals(object: Franc): boolean {
    const dollar: Franc = object;
    return this.amount === dollar.amount;
  }
}
