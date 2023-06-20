import {Component, Input} from '@angular/core';
import {PercentageOfObeseMenAndWomen} from "../../../models/info/percentage-of-obese-men-and-women";

@Component({
  selector: 'app-percentage-of-obese-men-and-women',
  templateUrl: './percentage-of-obese-men-and-women.component.html',
  styleUrls: ['./percentage-of-obese-men-and-women.component.scss']
})
export class PercentageOfObeseMenAndWomenComponent {
  @Input() percentageOfObeseMenAndWomen: PercentageOfObeseMenAndWomen = new PercentageOfObeseMenAndWomen(0, 0);
}
