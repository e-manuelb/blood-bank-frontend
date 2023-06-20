import {Component, OnInit} from '@angular/core';
import {GetProcessedInformationService} from "../../services/info/get-processed-information.service";
import {SavePeopleFromJSONService} from "../../services/person/save-people-from-json.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  formJSON: FormGroup = new FormGroup({});

  personQuantityForEachStates: Array<any> = [];
  averageBMIPerAges: Array<any> = [];
  percentageOfObeseMenAndWomen: any;
  averageAgeForEachBloodTypes: Array<any> = [];
  availableDonorsForEachBloodTypes: Array<any> = [];

  constructor(
    private getProcessedInformationService: GetProcessedInformationService,
    private savePeopleFromJSONService: SavePeopleFromJSONService,
    private formBuilder: FormBuilder,
    private toaster: ToastrService,
  ) {
    this.formJSON = new FormGroup({});
  }

  private createFormJSON() {
    this.formJSON = this.formBuilder.group({
      data: ["", Validators.required]
    });
  }

  public formatJSON() {
    const input = (<HTMLInputElement>document.getElementById('json-input'));

    input.value = JSON.stringify(JSON.parse(input.value), null, 4);
  }

  private getProcessedInformation() {
    this.getProcessedInformationService.handle().subscribe({
      next: (response: any) => {
        this.personQuantityForEachStates = response.personQuantityForEachState;
        this.averageBMIPerAges = response.averageBMIPerAge;
        this.percentageOfObeseMenAndWomen = response.percentageOfObeseMenAndWomen;
        this.averageAgeForEachBloodTypes = response.averageAgeForEachBloodType;
        this.availableDonorsForEachBloodTypes = response.availableDonorsForEachBloodType;
      }
    });
  }

  public savePeopleFromJSON() {
    if (this.formJSON.value['data'] == "") {
      this.toaster.warning("Please fill the textarea with JSON.");
    }

    this.savePeopleFromJSONService.handle(JSON.parse(this.formJSON.value['data'])).subscribe({
      next: (response: any) => {
        if (response?.message == "No new people have been added to the database.") {
          this.toaster.info("Data submitted successfully, but no new people have been added to the database.");
        } else {
          this.toaster.success("Data submitted successfully.");
        }
      },
      complete: () => {
        this.getProcessedInformation();
      }
    })
  }

  ngOnInit() {
    this.getProcessedInformation();
    this.createFormJSON();
  }
}
