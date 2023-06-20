import {Component, Input} from '@angular/core';
import {AvailableDonorsForEachBloodType} from "../../../models/info/available-donors-for-each-blood-type";

@Component({
  selector: 'app-available-donors-for-each-blood-type',
  templateUrl: './available-donors-for-each-blood-type.component.html',
  styleUrls: ['./available-donors-for-each-blood-type.component.scss']
})
export class AvailableDonorsForEachBloodTypeComponent {
  @Input() availableDonorsForEachBloodTypes: Array<AvailableDonorsForEachBloodType> = [];
}
