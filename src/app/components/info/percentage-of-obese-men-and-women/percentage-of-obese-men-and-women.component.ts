import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-percentage-of-obese-men-and-women',
  templateUrl: './percentage-of-obese-men-and-women.component.html',
  styleUrls: ['./percentage-of-obese-men-and-women.component.scss']
})
export class PercentageOfObeseMenAndWomenComponent {
  @Input() percentageOfObeseMenAndWomen: any;
}
