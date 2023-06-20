import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {RouterModule} from "@angular/router";
import {AppRoutes} from "./app.routes";
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './components/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PersonQuantityForEachStateComponent } from './components/info/person-quantity-for-each-state/person-quantity-for-each-state.component';
import { AverageBMIPerAgeComponent } from './components/info/average-bmiper-age/average-bmiper-age.component';
import { PercentageOfObeseMenAndWomenComponent } from './components/info/percentage-of-obese-men-and-women/percentage-of-obese-men-and-women.component';
import { AverageAgeForEachBloodTypeComponent } from './components/info/average-age-for-each-blood-type/average-age-for-each-blood-type.component';
import { AvailableDonorsForEachBloodTypeComponent } from './components/info/available-donors-for-each-blood-type/available-donors-for-each-blood-type.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    PersonQuantityForEachStateComponent,
    AverageBMIPerAgeComponent,
    PercentageOfObeseMenAndWomenComponent,
    AverageAgeForEachBloodTypeComponent,
    AvailableDonorsForEachBloodTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
