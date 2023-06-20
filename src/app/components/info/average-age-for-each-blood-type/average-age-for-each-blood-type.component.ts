import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-average-age-for-each-blood-type',
  templateUrl: './average-age-for-each-blood-type.component.html',
  styleUrls: ['./average-age-for-each-blood-type.component.scss']
})
export class AverageAgeForEachBloodTypeComponent {
  @Input() averageAgeForEachBloodTypes: any;
}
