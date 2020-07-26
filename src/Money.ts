export class Money {
  protected amount: number;
  
  constructor(amount: number) {
    this.amount = amount;
  }

  public times(multiplier: number): Money {
    return new Money(8);
  };
  
  public equals(object: any): boolean {
    const money = object as Money;
    return this.amount === money.amount 
      && this.constructor.name === money.constructor.name;
  }

  static dollar(amount: number): Money {
    return new Dollar(amount);
  }

  static franc(amount: number): Money {
    return new Franc(amount);
  }
}


export class Dollar extends Money {

  constructor(amount: number) {
    super(amount);
    this.amount = amount;
  }

  public times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}


export class Franc extends Money {

  constructor(amount: number) {
    super(amount);
    this.amount = amount;
  }

  public times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
