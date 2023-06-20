import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-average-bmiper-age',
  templateUrl: './average-bmiper-age.component.html',
  styleUrls: ['./average-bmiper-age.component.scss']
})
export class AverageBMIPerAgeComponent {
  @Input() averageBMIPerAges: any;
}
