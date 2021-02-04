import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  private ENTRY = 3.00;
  private per_unit = .35;
  private ny_tax_surcharge = .50;
  public total_fare = 0;

  public getFare(minutes_traveled_above_6_mph, miles_traveled_while_driving_below_6_mph, date, start_time) {
    this.total_fare = 50;
  }
}
