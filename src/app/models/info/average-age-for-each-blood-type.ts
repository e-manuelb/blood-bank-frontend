export class AverageAgeForEachBloodType {
  public bloodType: string;
  public averageAge: number;

  constructor(bloodType: string, averageAge: number) {
    this.bloodType = bloodType;
    this.averageAge = averageAge;
  }
}
