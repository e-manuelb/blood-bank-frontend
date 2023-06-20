export class AvailableDonorsForEachBloodType {
  public quantity: bigint;
  public bloodType: string;

  constructor(quantity: bigint, bloodType: string) {
    this.quantity = quantity;
    this.bloodType = bloodType;
  }
}
