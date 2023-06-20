import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-available-donors-for-each-blood-type',
  templateUrl: './available-donors-for-each-blood-type.component.html',
  styleUrls: ['./available-donors-for-each-blood-type.component.scss']
})
export class AvailableDonorsForEachBloodTypeComponent {
  @Input() availableDonorsForEachBloodTypes: any;
}
