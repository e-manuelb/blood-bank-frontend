export class PersonQuantityForEachState {
  public state: string;
  public quantity: bigint;

  constructor(state: string, quantity: bigint) {
    this.state = state;
    this.quantity = quantity;
  }
}
