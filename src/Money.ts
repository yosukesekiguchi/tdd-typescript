

export class Money {

  protected amount: number;
  protected currency_string: string;
  
  constructor(amount: number, currency_string: string) {
    this.amount = amount;
    this.currency_string = currency_string;
  }

  public currency(): string {
    return this.currency_string;
  }
  
  public equals(object: any): boolean {
    const money = object as Money;
    return this.amount === money.amount 
      && this.currency() === money.currency();
  }

  static dollar(amount: number): Money {
    return new Dollar(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Franc(amount, "CHF");
  }

  public times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency_string);
  }
}


export class Dollar extends Money {

  constructor(amount: number, currency_string: string) {
    super(amount, currency_string);
  }
  
  public times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {

  constructor(amount: number, currency_string: string) {
    super(amount, currency_string);
  }

  public times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency_string);
  }
}
