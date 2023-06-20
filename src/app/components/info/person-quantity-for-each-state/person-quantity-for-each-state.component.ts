import {Component, Input} from '@angular/core';
import {PersonQuantityForEachState} from "../../../models/info/person-quantity-for-each-state";

@Component({
  selector: 'app-person-quantity-for-each-state',
  templateUrl: './person-quantity-for-each-state.component.html',
  styleUrls: ['./person-quantity-for-each-state.component.scss']
})
export class PersonQuantityForEachStateComponent {
  @Input() personQuantityForEachStates: Array<PersonQuantityForEachState> = [];
}
