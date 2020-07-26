export class Money {
  protected amount: number;
  
  constructor(amount: number) {
    this.amount = amount;
  }
  
  public equals(object: any): boolean {
    const money = object as Money;
    return this.amount === money.amount 
      && this.constructor.name === money.constructor.name;
  }
}